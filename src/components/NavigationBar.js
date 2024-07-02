import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand txtlogo" to="/">Harry Potter</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/characters">Characters</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books">Books</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/spells">Spells</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/houses">Houses</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavigationBar;
