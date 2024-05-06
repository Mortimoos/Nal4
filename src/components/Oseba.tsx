import React from 'react';
import { Card } from 'react-bootstrap';
import { Uradnik, Igralec } from '../modules/oseba.module.ts';

type PersonProps = {
    data: Uradnik | Igralec | undefined;
};

const Oseba: React.FC<PersonProps> = ({ data }) => {
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

export default Oseba;
