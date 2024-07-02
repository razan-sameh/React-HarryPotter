import React from 'react';
import { fetchData } from '../api';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
    const navigate = useNavigate();
    const handleCardClick = (e) => {
        e.stopPropagation();
        navigate(`/characters/characterIndex`, { state: { character } });
    };

    const handleHouseClick = (e) => {
        e.stopPropagation();
        fetchData('/houses').then((houses) => {
            const house = houses.find(house => character.hogwartsHouse === house.house);
            console.log('house', house);
            navigate(`/houses/houseIndex`, { state: { house } });
        });
    };

    return (
        <div className="col">
            <div className="card bg-dark" style={{ cursor: 'pointer' }} onClick={handleCardClick}>
                <img src={character.image} width="100%" className="card-img-top" alt={character.nickname} />
                <div className="card-body">
                    <h5 className="card-title text-white">{character.nickname}</h5>
                    <p className="card-text text-white" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={handleHouseClick}>
                        <strong>House: </strong>
                        {character.hogwartsHouse}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
