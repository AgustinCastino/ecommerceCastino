import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import './ItemList.css'
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

function ItemList() {
  const [productos, setProductos] = useState([])
  const [productosFS, setProductosFS] = useState({})
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  // CON EL MOCK
  // useEffect(()=>{ 

  //   if (categoriaId) {
  //     getFetch
  //       .then((respuesta)=>{
        
  //       return(respuesta)
  //     })
  //     .then((resp)=> setProductos(resp.filter(producto=>producto.marca=== categoriaId)))
  //     .finally(()=> setLoading(false))
      
  //   }else{
  //     getFetch
  //       .then((respuesta)=>{
  //         setProductos(respuesta) 
  //     })
  //     .finally(()=> setLoading(false))
  //   }
  // },[categoriaId])

  //PARA UNA COLECCION (TODOS LOS ID)
   useEffect(()=>{
    const db = getFirestore()
    const queryColection = collection(db, "productos")
    getDocs(queryColection)
    .then((resp)=> setProductos(resp.docs.map(item => ({ id:item.id, ...item.data() } ) )))
    .finally(()=> setLoading(false))
  },[])

  // PARA UN UNICO ITEM
  // useEffect(()=>{
  //   const db = getFirestore()
  //   const queryDb = doc(db, 'productos','ujPQtsbvX7y3FffTSo44')
  //   getDoc(queryDb)
  //   .then((resp)=> setProductosFS( { id:resp.id, ...resp.data() } ))
  //   // console.log(queryDb)
  // },[])

  console.log(productos)

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

