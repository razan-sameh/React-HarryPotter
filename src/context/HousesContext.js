import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchData } from '../api';

const HousesContext = createContext([]);

export const useHouses = () => {
    return useContext(HousesContext);
};

export const HousesProvider = ({ children }) => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetchData('/houses').then(setHouses);
    }, []);

    return (
        <HousesContext.Provider value={houses}>
            {children}
        </HousesContext.Provider>
    );
};
