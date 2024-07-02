import React, { useState, useEffect } from 'react';
import { fetchData} from '../api';
import BookCard from '../components/BookCard';

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData('/books').then(setBooks);
    }, []);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control m-3" data-bs-theme="dark" type="search" placeholder="Search by title" aria-label="Search"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))
                ) : (
                    <p>No Book found with this title: {searchTerm}</p>
                )}
            </div>
        </div>
    );
};

export default BooksPage;
