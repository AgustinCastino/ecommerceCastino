import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to="/">Logo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/categoria/Adidas">Adidas</NavLink>
                        <NavLink to="/categoria/Nike">Nike</NavLink>
                        <NavLink to="/categoria/Vans">Vans</NavLink>
                        <NavDropdown title="Proximamente" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Buzos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar