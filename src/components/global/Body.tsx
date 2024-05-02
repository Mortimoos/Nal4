import React, {useContext, useState} from 'react';
import {Button, Col, FormControl, FormGroup, FormLabel, Modal, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {GlobalContext} from '../../context/GlobalContext';
import {Form} from 'react-router-dom';
import Team from "../../modules/ekipa.module.ts";
import {Igralec} from "../../modules/oseba.module.ts";


interface HeaderProps {
    team: Team | null;
}

const Header: React.FC<HeaderProps> = ({team}) => {
    const navigate = useNavigate();
    const {setSelectedTeam} = useContext(GlobalContext);
    const [showModal, setShowModal] = useState(false);

    function GoHome(): void {
        setSelectedTeam(null);
        navigate('/');
    }

    return (
        <Modal centered show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header className="bg-dark text-light" closeButton>
                <Modal.Title>Add Player</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
                <Form id="addPlayerForm">
                    <Row>
                        <Col>
                            <FormGroup controlId="playerFirstName">
                                <FormLabel>First Name</FormLabel>
                                <FormControl data-key="firstName" type="text" placeholder="Enter first name"
                                             required={true}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="playerLastName">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl data-key="lastName" type="text" placeholder="Enter last name" required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup controlId="playerYearBirth">
                                <FormLabel>Year of Birth</FormLabel>
                                <FormControl data-key="yearBirth" type="number" placeholder="Enter year of birth"
                                             min={new Date(Date.now()).getFullYear() - 40}
                                             max={new Date(Date.now()).getFullYear() - 18} required/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="playerBirthPlace">
                                <FormLabel>Place of Birth</FormLabel>
                                <FormControl data-key="birthPlace" type="text" placeholder="Enter place of birth"
                                             required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup controlId="playerHeight">
                                <FormLabel>Height (cm)</FormLabel>
                                <FormControl data-key="height" type="number" placeholder="Enter height in centimeters"
                                             min={100} required/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="playerThesis">
                                <FormLabel>Thesis</FormLabel>
                                <FormControl data-key="thesis" type="number" placeholder="Enter thesis" min="1"
                                             required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="playerInjured" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        direction: 'rtl',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <FormLabel className="m-0">The player has been injured</FormLabel>
                        <input data-key="injured" type="checkbox" style={{height: '25px', width: '25px'}}/>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light justify-content-between">
                <Button variant="outline-success" onClick={() => {
                    const form = document.getElementById('addPlayerForm');
                    let tempObject: any = { // Dangerous any type, but it's just a temporary build object
                        id: Math.floor(ifIDAvailable(Math.random() * 1000)),
                        firstName: '',
                        lastName: '',
                        yearBirth: 0,
                        height: 0,
                        thesis: 0,
                        injured: false
                    };

                    // Loop through the form inputs and assign the values to the tempObject
                    form?.querySelectorAll('input').forEach((input: HTMLInputElement) => {
                        const key = input.getAttribute('data-key');
                        if (key && tempObject.hasOwnProperty(key)) {
                            const inputValue = input.type !== 'checkbox' ? input.value : input.checked;
                            tempObject[key as keyof Igralec] = inputValue as Igralec[keyof Igralec]; // This gave me a headache
                        }
                    });

                    const newPlayer: Igralec = tempObject; // Making the real player object
                    tempObject = null; // Set the tempObject to null to free up memory

                    // Close the modal
                    console.log(team?.addPlayer);
                    if (!team) return GoHome();

                    // In order to trigger the re-render, we need to create a new object and set that as the value of the global state
                    const updatedTeam: Team = {
                        ...team,
                        addPlayer: team.addPlayer,
                        updatePlayer: team.updatePlayer,
                        removePlayer: team.removePlayer,
                        printData: team.printData,
                        getPlayerCount: team.getPlayerCount
                    };
                    updatedTeam.addPlayer(newPlayer); // Add the player to the copied team object

                    setSelectedTeam(updatedTeam);
                    setShowModal(false);

                    /**
                     * Checks if the given ID is available in the team's players array.
                     * If the ID is already taken, generates a new random ID and recursively checks again.
                     * @param id - The ID to check for availability.
                     * @returns The available ID.
                     */
                    function ifIDAvailable(id: number): number {
                        if (team?.player?.find(p => p.id === id)) {
                            return ifIDAvailable(Math.random() * 1000);
                        }
                        return id;
                    }
                }}>
                    Add
                </Button>
                <Button variant="outline-danger" onClick={() => setShowModal(false)}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Header;
