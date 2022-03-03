import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import Item from '../Item/Item';

export default function ItemList() {
  const [productos, setProductos] = useState([])
  useEffect(()=>{ 
    getFetch
      .then((respuesta)=>{
        setProductos(respuesta) 
    })
  },[])

  return(
    <div>
      {productos.map((prod)=><Item key={prod.id} producto={prod.producto} stock={prod.stock}/>)}
    </div>
  )
}

