import React from 'react';
import Team from "../../modules/ekipa.module.ts";
import '../styles/Menu.css'

interface TeloProps {
    ekipa: Team | null;
}

const Menu: React.FC<TeloProps> = ({ ekipa }) => {
    return (
        <div className="menu">
            <h1>{ekipa.name}</h1>
        </div>
    );
};

export default Menu;
