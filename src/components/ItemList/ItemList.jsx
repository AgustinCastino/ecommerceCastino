import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import './ItemList.css'
import { query, where, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"

function ItemList() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()


  //PARA UNA COLECCION (TODOS LOS ID)
  useEffect(() => {
    if (categoriaId) {
      
      const db = getFirestore()
      const queryColection = collection(db, "productos")
      const queryFilter = query(queryColection, where('marca', '==', categoriaId))
      getDocs(queryFilter)
      .then((resp) => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .finally(() => setLoading(false))

      } else {

      const db = getFirestore()
      const queryCollection = collection(db, "productos")
      getDocs(queryCollection)
      .then((resp) => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .finally(() => setLoading(false))

    }

  }, [categoriaId])


  return (

    <div className='ItemList'>

      {loading ? <Loading />
        :
        productos.map((prod) => <Item key={prod.id} producto={prod.producto} stock={prod.stock}
          img={prod.img} id={prod.id} />)}

    </div>
  )
}

export default ItemList

