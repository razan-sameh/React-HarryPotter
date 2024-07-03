import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/NavigationBar.css';

const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand >
                <Nav.Link className="txtlogo" as={Link} to="/">Harry Potter</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                    <Nav.Link as={Link} to="/books">Books</Nav.Link>
                    <Nav.Link as={Link} to="/spells">Spells</Nav.Link>
                    <Nav.Link as={Link} to="/houses">Houses</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavigationBar;
