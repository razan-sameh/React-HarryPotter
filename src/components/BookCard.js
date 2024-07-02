import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const handleCardClick = (e) => {
        e.stopPropagation();
        navigate(`/books/bookIndex`, { state: { book } });
    };
    return (
        <div className="col">
            <div className="card bg-dark" style={{cursor:'pointer' }} onClick={handleCardClick}>
                <img src={book.cover} className="card-img-top" alt={book.title} />
                <div className="card-body">
                    <h5 className="card-title text-white">{book.title}</h5>
                    <p className="card-text text-white">Release Date: {book.releaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
