import React, { useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { useCharacters } from '../context/CharactersContext';

const CharactersPage = () => {
    const characters = useCharacters();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCharacters = characters.filter(character => {
        return character.nickname?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control m-3" data-bs-theme="dark" type="search" placeholder="Search by nickname" aria-label="Search"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                {filteredCharacters.length > 0 ? (
                    filteredCharacters.map((character, index) => (
                        <CharacterCard key={index} character={character} />
                    ))

                ) : (
                    <p>No character found with this nickname: {searchTerm}</p>
                )}
            </div>
        </div>

    );
};

export default CharactersPage;