import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Team from "../modules/ekipa.module.ts";
import Oseba from "./Oseba.tsx";


const TeamDetails: React.FC = () => {
    const { teams, selectedTeam, setSelectedTeam } = useContext(GlobalContext);
    const { id } = useParams<{ id: string }>();

    const team = teams.find((team: Team) => team.id?.toString() === id);

    useEffect(() => {
        if (team) {
            setSelectedTeam(team);
        }
    }, [team, setSelectedTeam]);

    useEffect(() => {
        // Silence is golden...
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
                {team.player && team.player.length > 0 ? (
                    team.player.map((player) => (
                        <Col lg={4} md={6} key={player.id} className="p-2">
                            <Oseba data={player} />
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
