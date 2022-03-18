import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const AgregarCarrito = ()=>{
    
    return(
        <Link to='/cart'>
            <button onClick={()=>console.log('ir a carrito')}>
                Terminar compra
            </button>
        </Link>
    )  
}

function ItemDetail ({producto, stock, precio}){
    const [button,Setbutton] = useState(false)

    function onAdd(cantidad) {
        console.log(cantidad)
        Setbutton(true)
    }

    return(
        <div>
            <div>
                <h2>Detalle</h2>
                <h1>{producto}</h1>
                <p>Precio: {precio}</p>
                <p>Stock: {stock}</p>

                {
                    button === false ?
                    <ItemCount  initial={1} stock={stock} producto={producto} onAdd={onAdd}/>
                    :
                    <AgregarCarrito/>
                }
                
            </div>
        </div>
    )
}

export default ItemDetail