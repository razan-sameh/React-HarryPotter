import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import { useLocation } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

const HouseDetailPage = () => {
    const location = useLocation();
    const house = location.state?.house;
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (house) {
            fetchData('/characters').then((charactersData)=>{
                const filteredCharacters = charactersData.filter(character => character.hogwartsHouse === house.house);
                setCharacters(filteredCharacters);
            });
        }
    }, [house]);

    if (!house) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{house.name}</h5>
                <p className="card-text">Founder: {house.founder}</p>
                <p className="card-text">Animal: {house.animal}</p>
                <h6>Characters:</h6>
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                {characters.map((character,index) => (
                        <CharacterCard key={index} character={character} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HouseDetailPage;
