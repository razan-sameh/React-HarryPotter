import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { useCharacters } from '../context/CharactersContext';

const HouseDetailPage = () => {
    const location = useLocation();
    const house = location.state?.house;
    const characters = useCharacters();
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    console.log('house in HouseDetailPage', house);

    useEffect(() => {
        if (house && characters.length > 0) {
            const filtered = characters.filter(character => character.hogwartsHouse === house.house);
            setFilteredCharacters(filtered);
        }
    }, [house, characters]);

    if (!house) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{house.name}</h5>
                <p className="card-text">Founder: {house.founder}</p>
                <p className="card-text">Animal: {house.animal} {house.emoji}</p>
                <h6>Characters:</h6>
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                    {filteredCharacters.map((character, index) => (
                        <CharacterCard key={index} character={character} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HouseDetailPage;
