import React from 'react';
import Team from '../modules/team.module';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface TeamsProps {
    teams: Team[];
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
    return (
        <Container className="bg-dark text-white py-5">
            <h1 className="text-center mb-4">Teams</h1>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {teams.map((team) => (
                    <Col key={team.id}>
                        <Card bg="secondary" text="white" className="h-100">
                            <Card.Body>
                                <Card.Title>{team.name}</Card.Title>
                                <Card.Text>
                                    Year of establishment: {team.yearEstablished}
                                </Card.Text>
                                <Link to={`/team/${team.id}`}>
                                    <Button variant="outline-light">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Teams;
