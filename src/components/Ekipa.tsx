import React from "react";
import Team from "../modules/ekipa.module.ts";
import { Link } from 'react-router-dom';

interface TeamProps {
    teams: Team[];
}

const Teams: React.FC<TeamProps> = ({teams}) => {
    return (
        <div>
            <h2>Seznam ekip:</h2>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>
                        <Link to={`/team/${team.id}`}>{team.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;
