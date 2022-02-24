import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'

function NavBar(){
    return(
      <div className="App-navbar">
            <nav>
                <ul>
                    <li>Logo Ecommerce</li>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Carrito</a></li>
                    <li><a href="/"><CartWidget /></a></li>
                </ul>
            </nav>
      </div>  
    )
}

export default NavBar