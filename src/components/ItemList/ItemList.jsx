import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import Item from '../Item/Item';
import './ItemList.css'

function ItemList() {
  const [productos, setProductos] = useState([])
  useEffect(()=>{ 
    getFetch
      .then((respuesta)=>{
        setProductos(respuesta) 
    })
  },[])


  return(
    <div className='ItemList'>
      {productos.map((prod)=><Item key={prod.id} producto={prod.producto} stock={prod.stock} 
      img={prod.img}/>)}
    </div>
  )
}

export default ItemList

