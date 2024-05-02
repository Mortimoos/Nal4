import React, {useContext, useState} from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {GlobalContext} from '../../context/GlobalContext';
import Team from "../../modules/ekipa.module.ts";
import {config} from "../../configuration/config.ts";
import {Alert, MessageType} from "./Alert.tsx";
import {IoMdHome, IoMdAdd} from "react-icons/io";

interface HeaderProps {
    team: Team | null;
}

const Header: React.FC<HeaderProps> = ({team}) => {
    const navigate = useNavigate();
    const {setSelectedTeam} = useContext(GlobalContext);
    const [, setShowModal] = useState(false);

    function GoHome(): void {
        setSelectedTeam(null);
        navigate('/');
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    {team ? team.name : config.app.ime}
                </Navbar.Brand>
                {team &&
                    <div>
                        <Navbar.Text className="p-1 cursor-pointer" onClick={() => {
                            GoHome();
                        }}>
                            <IoMdHome size={25}/>
                        </Navbar.Text>
                        <Navbar.Text className="p-1 cursor-pointer" onClick={() => setShowModal(true)}>
                            <IoMdAdd size={25}/>
                        </Navbar.Text>
                    </div>
                }
            </Container>
            {team && team?.getPlayerCount() != config.app.sport.players.count &&
                <Alert message={`The player count is ${team?.getPlayerCount()}`} type={MessageType.WARNING}/>}
        </Navbar>
    );
};

export default Header;
