import React from 'react';
import { Card } from 'react-bootstrap';
import { Official, Player } from '../modules/person.module';

type PersonProps = {
    data: Official | Player | undefined;
};

const Person: React.FC<PersonProps> = ({ data }) => {
    return (
        <>
            {data ? (
                <Card>
                    <Card.Body>
                        <Card.Title>{data.firstName} {data.lastName}</Card.Title>
                        <Card.Text>
                            Birth Place: {data.birthPlace}
                            <br />
                            Birth Year: {data.birthYear}
                            <br />
                            ID: {data.id}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>No person data available</p>
            )}
        </>
    );
};

export default Person;
