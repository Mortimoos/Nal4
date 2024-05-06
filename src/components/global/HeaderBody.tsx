import React, { useContext, useState } from 'react';
import Ekipa from '../../modules/ekipa.module.ts';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Modal, Navbar, Row } from 'react-bootstrap';
import { config } from '../../configuration/config.ts';
import { IoMdHome, IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router';
import { GlobalniKontekst } from '../../context/GlobalniKontekst.tsx';
import { Alert, MessageType } from './Alert';
import { Form } from 'react-router-dom';
import { Igralec } from '../../modules/oseba.module.ts';

interface HeaderProps {
  team: Ekipa | null;
}

const HeaderBody: React.FC<HeaderProps> = ({ team }) => {
  const navigate = useNavigate();
  const { setSelectedTeam } = useContext(GlobalniKontekst);
  const [showModal, setShowModal] = useState(false);

  function GoHome(): void {
    setSelectedTeam(null);
    navigate('/');
  }

  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand>
            {team ? team.name : config.app.ime}
          </Navbar.Brand>
          {team &&
              <div>
                <Navbar.Text className="p-1 cursor-pointer" onClick={() => GoHome()}>
                  <IoMdHome size={25} />
                </Navbar.Text>
                <Navbar.Text className="p-1 cursor-pointer" onClick={() => setShowModal(true)}>
                  <IoMdAdd size={25} />
                </Navbar.Text>
              </div>
          }
        </Container>

        {team && (
            <>
              <Alert
                  message={`Stevilo igralcev: ${team?.getPlayerCount()}`}
                  type={MessageType.WARNING}
              />
              {team?.getPlayerCount() < config.app.sport.players.count && (
                  <Alert
                      message="Napaka: Manj kot 11 igralcev."
                      type={MessageType.ERROR}
                  />
              )}
            </>
        )}


        <Modal centered show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header className="bg-dark text-light" closeButton>
            <Modal.Title>Dodaj igralca</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-light" >
            <Form id="addPlayerForm">
              <Row>
                <Col>
                  <FormGroup controlId="playerFirstName">
                    <FormLabel>Ime</FormLabel>
                    <FormControl data-key="firstName" type="text" placeholder="Enter first name" required={true} />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="playerLastName">
                    <FormLabel>Priimek</FormLabel>
                    <FormControl data-key="lastName" type="text" placeholder="Enter last name" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup controlId="playerbirthYear">
                    <FormLabel>Leto Rojstva</FormLabel>
                    <FormControl data-key="birthYear" type="number" placeholder="Enter year of birth" min={new Date(Date.now()).getFullYear() - 40} max={new Date(Date.now()).getFullYear() - 18} required />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="playerBirthPlace">
                    <FormLabel>Rojstno Mesto</FormLabel>
                    <FormControl data-key="birthPlace" type="text" placeholder="Enter place of birth" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup controlId="playerHeight">
                    <FormLabel>Visina (cm)</FormLabel>
                    <FormControl data-key="height" type="number" placeholder="Enter height in centimeters" min={100} required />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="playerweight">
                    <FormLabel>Teza (kg)</FormLabel>
                    <FormControl data-key="weight" type="number" placeholder="Enter weight" min="1" required />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup controlId="playerInjured" style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', direction: 'rtl', gap: '10px', marginTop: '10px' }}>
                <FormLabel className="m-0">?Je igralec poskodovan</FormLabel>
                <input data-key="injured" type="checkbox" style={{ height: '25px', width: '25px' }} />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer className="bg-dark text-light justify-content-between" >
            <Button variant="outline-success" onClick={() => {
              const form = document.getElementById('addPlayerForm');
              let tempObject: any = {
                id: Math.floor(ifIDAvailable(Math.random() * 1000)),
                firstName: '',
                lastName: '',
                birthYear: 0,
                height: 0,
                weight: 0,
                injured: false
              };

              form?.querySelectorAll('input').forEach((input: HTMLInputElement) => {
                const key = input.getAttribute('data-key');
                if (key && tempObject.hasOwnProperty(key)) {
                  const inputValue = input.type !== 'checkbox' ? input.value : input.checked;
                  tempObject[key as keyof Igralec] = inputValue as Igralec[keyof Igralec];
                }
              });

              const newPlayer: Igralec = tempObject;
              tempObject = null;

              if (!team) return GoHome();

              const updatedTeam: Ekipa = {
                ...team,
                addPlayer: team.addPlayer,
                updatePlayer: team.updatePlayer,
                removePlayer: team.removePlayer,
                printData: team.printData,
                getPlayerCount: team.getPlayerCount
              };
              updatedTeam.addPlayer(newPlayer);

              setSelectedTeam(updatedTeam);
              setShowModal(false);

              function ifIDAvailable(id: number): number {
                if (team?.players?.find(p => p.id === id)) {
                  return ifIDAvailable(Math.random() * 1000);
                }
                return id;
              }
            }}>
              Dodaj
            </Button>
            <Button variant="outline-danger" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
  );
};

export default HeaderBody;
