import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

function Navigation() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as as={Link} to="/">Pradžia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {!isAuthenticated && (
                        <Nav className="me-auto">
                            <Nav.Link href="" onClick={() => loginWithRedirect()}>Prisijungti</Nav.Link>
                        </Nav>)}
                    {isAuthenticated && (
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/semester1">1-as semestras</Nav.Link>
                            <Nav.Link as={Link} to="/semester2">2-as semestras</Nav.Link>
                            <Nav.Link as={Link} to="/semester3">3-as semestras</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Kontaktai</Nav.Link>
                            <Nav.Link href="" onClick={() => logout()}>Atsijungti</Nav.Link>
                        </Nav>)}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
