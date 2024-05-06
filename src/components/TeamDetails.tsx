import React, { useContext, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalniKontekst } from '../context/GlobalniKontekst.tsx';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Oseba from './Oseba.tsx';
import Ekipa from '../modules/ekipa.module.ts';

const TeamDetails: React.FC = () => {
    const { teams, selectedTeam, setSelectedTeam } = useContext(GlobalniKontekst);
    const { id } = useParams<{ id: string }>();

    const team = teams.find((team: Ekipa) => team.id?.toString() === id);

    useEffect(() => {
        if (team) {
            setSelectedTeam(team);
        }
    }, [team, setSelectedTeam]);

    useEffect(() => {
    }, [selectedTeam]);

    if (!team) {
        return (
            <Container>
                <div className="text-center text-white mt-5">
                    <p>Team not found</p>
                    <Link to="/">
                        <Button variant="primary">Go to Home</Button>
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <Container className="text-white">
            <Card className="mb-3 text-center" bg="dark" text="white">
                <Card.Body>
                    <Card.Title>{team.name}</Card.Title>
                    <Card.Text>
                        Year of establishment: {team.yearEstablished}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row className="mb-3">
                <Col md={6}>
                    <h5 className="text-center">Coach</h5>
                    <Oseba data={team.trainer} />
                </Col>
                <Col md={6}>
                    <h5 className="text-center">Manager</h5>
                    <Oseba data={team.director} />
                </Col>
            </Row>
            <Row>
                <h5 className="text-center mb-4">Players</h5>
                {team.players && team.players.length > 0 ? (
                    team.players.map((player) => (
                        <Col lg={4} md={6} key={player.id} className="p-2">
                            <Oseba data={player} />
                            {/* <Player name={`${player.firstName} ${player.lastName}`} number={player.id} />  */}
                            {/* ***Player is deprecated*** */}
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No players available</p>
                )}
            </Row>
        </Container>
    );
};

export default TeamDetails;
