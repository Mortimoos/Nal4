import React from 'react';
import './../../styles/Noga.css'

interface NogaProps {
    className: string
}

const Noga: React.FC<NogaProps> = () => {
    return (
        <div className="noga">
            <h2>Avtor spletne strani:</h2>
            <p>Ime: Tara Jakhel</p>
            <p>Email: krimones@gmail.com</p>
            <p>Leto: 2024</p>
        </div>
    );
};

export default Noga;
