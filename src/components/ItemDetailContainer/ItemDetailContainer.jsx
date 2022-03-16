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

    return(
        <ItemDetail producto = {productos.producto} 
        stock = {productos.stock} precio = {productos.precio}/>
    )
}

export default ItemDetailContainer