import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';


function ItemDetailContainer (){
    const [productos, setProductos] = useState([])


    useEffect(()=>{
        getFetch
        .then((respuesta)=>{
        setProductos(respuesta.find(elemento => elemento.id === 1)) 
    })
    },[])

    return(
        <ItemDetail producto = {productos.producto} 
        stock = {productos.stock} precio = {productos.precio}/>
    )
}

export default ItemDetailContainer