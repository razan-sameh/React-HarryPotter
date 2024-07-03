import React from 'react';
import HouseCard from '../components/HouseCard';
import { useHouses } from '../context/HousesContext';

const HousesPage = () => {
    const houses = useHouses();

    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-1 g-4 m-2">
                {houses.map((house, index) => (
                    <HouseCard key={index} house={house} />
                ))}
            </div>
        </div>
    );
};

export default HousesPage;
