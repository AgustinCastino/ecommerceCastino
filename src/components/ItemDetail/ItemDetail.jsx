import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import './ItemDetail.css'

const AgregarCarrito = () => {

    return (
        <>
            <Link to='/cart'>
                <button>
                    Terminar compra
                </button>
            </Link>
            <Link to='/'>
                <button>
                    Seguir comprando
                </button>
            </Link>
        </>
    )
}

function ItemDetail({ productos }) {
    const [button, Setbutton] = useState(false)
    const { agregarCart, calcularPrecioTotal } = useCartContext()

    function onAdd(cantidad) {
        Setbutton(true)
        agregarCart(productos, cantidad)
    }


    return (

        <div className="contenedorDetalle">
            <div className="fotoDetalle">
                <img src={productos.img} alt={productos.producto} />
            </div>

            <div className="descripcionDetalle">
                <h1>{productos.producto}</h1>
                <b style={{display:'block'}}>${productos.precio}</b>
                <b>Stock disponible: {productos.stock}</b>
                {
                    button === false ?
                    <ItemCount initial={1} stock={productos.stock} producto={productos.producto} onAdd={onAdd} />
                    :
                    
                    <AgregarCarrito />
                }
            </div>

        </div>
    )
}

export default ItemDetail