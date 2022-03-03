import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'

function NavBar(){
    return(
      <div className="appNavbar">
            <nav className='navContenedor'>
                <a className='logo'>Logo</a>
                <ul className='navMenu'>
                    <li className='navItem'><a href="/" className='navLink'>Inicio</a></li>
                    <li className='navItem' ><a href="/" className='navLink'>Nosotros</a></li>
                    <li className='navItem'><a href="/" className='navLink'>Carrito</a></li>
                    <li className='navItem'><a href="/"><CartWidget /></a></li>
                </ul>
            </nav>
      </div>  
    )
}

export default NavBar