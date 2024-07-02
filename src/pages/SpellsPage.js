import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import SpellCard from '../components/SpellCard';

const SpellsPage = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchData('/spells').then(setSpells);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
        {spells.map((spell, index) => (
          <SpellCard key={index} spell={spell} />
        ))}
      </div>
    </div>
  );
};

export default SpellsPage;
