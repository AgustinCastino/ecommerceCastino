import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

const AgregarCarrito = ()=>{
    
    return(
        <>
        <Link to='/cart'>
            <button onClick={()=>console.log('ir a carrito')}>
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

function ItemDetail ({productos}){
    const [button,Setbutton] = useState(false)
    const {agregarCart} = useCartContext()
    
    function onAdd(cantidad) {
        Setbutton(true)
        agregarCart(productos,cantidad)
    }


    return(
        <div>
            <div>
                <h2>Detalle</h2>
                <h1>{productos.producto}</h1>
                <p>Precio: {productos.precio}</p>
                <p>Stock: {productos.stock}</p>

                {
                    button === false ?
                    <ItemCount  initial={1} stock={productos.stock} producto={productos.producto} onAdd={onAdd}/>
                    :
                    <AgregarCarrito/>
                }
                
            </div>
        </div>
    )
}

export default ItemDetail