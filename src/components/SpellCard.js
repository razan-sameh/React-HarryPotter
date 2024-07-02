import React from 'react';

const SpellCard = ({ spell }) => {
  return (
    <div className="col">
      <div className="card w-200 h-100">
        <div className="card-body">
          <h5 className="card-title">{spell.spell}</h5>
          <p className="card-text">{spell.use}</p>
        </div>
      </div>
    </div>
  );
};

export default SpellCard;
