import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import './ItemList.css'

function ItemList() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  
  useEffect(()=>{ 

    if (categoriaId) {
      getFetch
        .then((respuesta)=>{
        
        return(respuesta)
      })
      .then((resp)=> setProductos(resp.filter(producto=>producto.marca=== categoriaId)))
      .finally(()=> setLoading(false))
      
    }else{
      getFetch
        .then((respuesta)=>{
          setProductos(respuesta) 
      })
      .finally(()=> setLoading(false))
    }
  },[categoriaId])

  return(
    
    <div className='ItemList'>
      
      { loading ? <Loading />
      : 
      productos.map((prod)=><Item key={prod.id} producto={prod.producto} stock={prod.stock} 
      img={prod.img} id={prod.id}/>)}

    </div>
  )
}

export default ItemList

