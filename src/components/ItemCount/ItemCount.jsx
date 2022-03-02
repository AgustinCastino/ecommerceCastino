import { useState } from 'react';
import './ItemCount.css'

export default function ItemCount({producto, stock, initial}){
    const [count, setCount] = useState(initial);
  
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

    function agregarCarrito(){
      console.log(`Ustedes agregó ${count} pares de ${producto}`)
      setCount(1)
    }
  
    return (
      <div className="card">
        <h2>{producto} </h2>
        <div className="imagen">Acá va una imagen del producto</div>
        <div className="controladores">
          <button onClick={restarCantidad}> - </button>
          <label> {count} </label>
          <button onClick={sumarCantidad}> + </button>
        </div>
        <button onClick={agregarCarrito} className='agregarCarrito'> Agregar al carrito</button>
      </div>
    );
}