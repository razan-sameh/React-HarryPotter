import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HouseCard = ({ house }) => {
    const [color, setColor] = useState(house.colors[0]);
    const navigate = useNavigate();

    const handleHouseClick = (e) => {
        e.stopPropagation();
        navigate(`/houses/houseIndex`, { state: { house } });
    };
    const toggleColor = (e) => {
        e.stopPropagation(); // Prevent the event from propagating to the parent element
        setColor(prevColor =>
            prevColor === house.colors[0] ? house.colors[1] : house.colors[0]
        );
    };

    return (
        <div className="col">
            <div className="card" style={{ backgroundColor: color ,cursor:'pointer' }} onClick={handleHouseClick}>
                <div className="card-body">
                    <h5 className="card-title">{house.name}</h5>
                    <p className="card-text text-info-emphasis">Founder: {house.founder}</p>
                    <p className="card-text text-info-emphasis">Animal: {house.animal}</p>
                    <button className="btn btn-dark" onClick={toggleColor}>
                        Toggle Color
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;
