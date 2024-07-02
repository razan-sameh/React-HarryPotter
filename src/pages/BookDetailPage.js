import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetailPage = () => {
    const location = useLocation();
    const book = location.state?.book;

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid">
            <div className="card m-3" >
                <div className="row g-0" style={{maxWidth:'800px'}}>
                    <div className="col-md-4">
                        <img src={book.cover} className="img-fluid rounded-start" alt={book.cover} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">
                                <strong>original Title: </strong>
                                {book.originalTitle}
                            </p>
                            <p className="card-text">
                                <strong>Release Date: </strong>
                                {book.releaseDate}
                            </p>
                            <p className="card-text">
                                <strong>pages: </strong>
                                {book.pages}
                            </p>
                            <p className="card-text">
                                <strong>Description: </strong>
                                {book.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetailPage;
