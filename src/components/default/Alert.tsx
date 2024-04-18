import React from 'react';

interface OpozoriloProps {
    steviloIgralcev: number;
}

const Opozorilo: React.FC<OpozoriloProps> = ({ steviloIgralcev }) => {
    return (
        <div>
            {steviloIgralcev < 11 && (
                <p>Ekipa ima premalo igralcev.</p>
            )}
        </div>
    );
};

export default Opozorilo;
