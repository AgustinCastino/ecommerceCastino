import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"


function ItemDetailContainer (){
    const [productos, setProductos] = useState([])
    const {Id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db, 'productos', Id)
        getDoc(queryDb)
        .then((resp)=> setProductos( { id:resp.id, ...resp.data() } ))
    },[])

    return(
        // <ItemDetail producto = {productos.producto} 
        // stock = {productos.stock} precio = {productos.precio}/>

        <ItemDetail productos={productos}/>
    )
}

export default ItemDetailContainer