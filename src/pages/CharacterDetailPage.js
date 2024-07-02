import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CharacterDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const character = location.state?.character;

    const handleHouseClick = (e) => {
        e.stopPropagation();
        navigate(`/houses/houseIndex`, { state:  character.hogwartsHouse });
    };

    if (!character) {
        return <div>Loading...</div>;
    }

    const renderChildren = () => {
        if (character.children.length === 0) {
            return <p className="card-text">{character.fullName} has no children.</p>;
        } else {
            return (
                <div>
                    <strong className="card-text">{character.fullName}'s children:</strong>
                    <ul>
                        {character.children.map((child, index) => (
                            <li className="card-text" key={index}>{child}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return (
        <div className="container-fluid">
            <div className="card m-3" >
                <div className="row g-0" style={{ maxWidth: '800px' }}>
                    <div className="col-md-4">
                        <img src={character.image} className="card-img-top" alt={character.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{character.fullName}</h5>
                            <p className="card-text">
                                <strong>Nick name: </strong>
                                {character.nickname}
                            </p>
                            <p className="card-text" style={{cursor:'pointer',textDecoration:'underline'}} onClick={handleHouseClick}>
                                <strong>House: </strong>
                                {character.hogwartsHouse}
                            </p>
                            <p className="card-text">
                                <strong>Interpreted By: </strong>
                                {character.interpretedBy}
                            </p>
                            <p className="card-text">
                                <strong>birthdate: </strong>
                                {character.birthdate}
                            </p>
                            {renderChildren()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailPage;
