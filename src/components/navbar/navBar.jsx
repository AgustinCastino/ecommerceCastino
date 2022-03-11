import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Remeras</Nav.Link>
                        <Nav.Link href="#pricing">Buzos</Nav.Link>
                        <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">VANS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><CartWidget /></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //   <div className="appNavbar">
        //         <nav className='navContenedor'>
        //             <a className='logo'>Logo</a>
        //             <ul className='navMenu'>
        //                 <li className='navItem'><a href="/" className='navLink'>Inicio</a></li>
        //                 <li className='navItem' ><a href="/" className='navLink'>Nosotros</a></li>
        //                 <li className='navItem'><a href="/" className='navLink'>Carrito</a></li>
        //                 <li className='navItem'><a href="/"><CartWidget /></a></li>
        //             </ul>
        //         </nav>
        //   </div>  
    )
}

export default NavBar