import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import HouseCard from '../components/HouseCard';

const HousesPage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchData('/houses').then(setHouses);
  }, []);

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
