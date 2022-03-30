import { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock, onAdd}){
    const [count, setCount] = useState(1);

    function sumarCantidad() {
        if (count < stock) {
            setCount(count + 1);

        }
    }

    function restarCantidad() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function agregarCarrito() {
        onAdd(count)
        setCount(1)

    }

    return(
        <>
        <div className="controladores">
            <button className="btnRestar" onClick={restarCantidad}> - </button>
            <b className="contadorUnidades"> {count} </b>
            <button className="btnSumar" onClick={sumarCantidad}> + </button>
            <button onClick={agregarCarrito} className='agregarCarrito'> Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount