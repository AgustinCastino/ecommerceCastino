import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from "react-router-dom";


function ItemDetailContainer (){
    const [productos, setProductos] = useState([])
    const {Id} = useParams()

    useEffect(()=>{
        getFetch
        .then((respuesta)=>{
        setProductos(respuesta.find(elemento => elemento.id === Id)) 
    })
    },[])

    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDb = doc(db, 'productos', Id)
    //     getDoc(queryDb)
    //     .then((resp)=> setProductosFS( { id:resp.id, ...resp.data() } ))
    //     // console.log(queryDb)
    // },[])

    return(
        // <ItemDetail producto = {productos.producto} 
        // stock = {productos.stock} precio = {productos.precio}/>

        <ItemDetail productos={productos}/>
    )
}

export default ItemDetailContainer