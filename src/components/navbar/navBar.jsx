import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../images/logo.png'
import './navBar.css'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='navContainer'>
                <NavLink className='navLink' to="/">
                    <img className='logoImg'src={logo} alt="Logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='navLink' to="/categoria/Adidas">Adidas</NavLink>
                        <NavLink className='navLink' to="/categoria/Nike">Nike</NavLink>
                        <NavLink className='navLink' to="/categoria/Vans">Vans</NavLink>
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