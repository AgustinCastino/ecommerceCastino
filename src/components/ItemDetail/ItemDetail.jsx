import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import './ItemDetail.css'

const AgregarCarrito = () => {

    return (
        <div className='controladoresCompra' >
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
        </div>
    )
}

function ItemDetail({ productos }) {
    const [button, Setbutton] = useState(false)
    const { agregarCart } = useCartContext()

    function onAdd(cantidad) {
        Setbutton(true)
        agregarCart(productos, cantidad)
    }


    return (
        <>

            <div className="contenedorDetalle">
                <div className="fotoDetalle">
                    <img src={productos.img} alt={productos.producto} />
                </div>

                <div className="descripcionDetalle">
                    <h1>{productos.producto}</h1>
                    <b style={{ display: 'block' }}>${productos.precio}</b>
                    <b>Stock disponible: {productos.stock}</b>
                    {productos.stock > 0 ?
                        <>
                            {
                                button === false ?
                                    <ItemCount initial={1} stock={productos.stock} producto={productos.producto} onAdd={onAdd} />
                                    :
                                    <>
                                        <AgregarCarrito />
                                    </>
                            }
                        </>
                        :

                        <h5 className="sinStock"> No hay stock disponible</h5>

                    }
                </div>

            </div>
        </>



    )
}

export default ItemDetail