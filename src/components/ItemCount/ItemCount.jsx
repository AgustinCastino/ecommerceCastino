import { useState } from 'react';

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
                <button onClick={restarCantidad}> - </button>
                <label> {count} </label>
                <button onClick={sumarCantidad}> + </button>
            </div>
            <button onClick={agregarCarrito} className='agregarCarrito'> Agregar al carrito</button>
        </>
    )
}

export default ItemCount