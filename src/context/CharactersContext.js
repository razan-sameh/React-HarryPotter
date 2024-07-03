import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchData } from '../api';

const CharactersContext = createContext([]);

export const useCharacters = () => {
    return useContext(CharactersContext);
};

export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchData('/characters').then(setCharacters);
    }, []);

    return (
        <CharactersContext.Provider value={characters}>
            {children}
        </CharactersContext.Provider>
    );
};
