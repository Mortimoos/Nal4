import React from 'react';
import '../styles/Igralec.css';
import {Funkcionar} from "../modules/oseba.module.ts";
import type {Igralec} from "../modules/oseba.module.ts";

interface PersonProps {
    data: Funkcionar | Igralec | undefined
}

const Igralec: React.FC<PersonProps> = ({ data }) => {
    return (
        <>
            {data ? (
                <div className="igralec">
                    <h2>
                        <p>{data.firstName} {data.lastName}</p>
                        <p>
                            Birth Place: {data.birthPlace}
                            <br/>
                            Birth Year: {data.birthYear}
                            <br/>
                            ID: {data.id}
                        </p>
                    </h2>
                </div>
            ) : (
                <p>No person data available</p>
            )}
        </>
    );
};

export default Igralec;
