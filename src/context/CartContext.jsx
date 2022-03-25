import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cartList, SetCartList] = useState([])
    const [productosTotales, SetProductosTotales] = useState(0)

    const agregarCart = (productos, cantidad) =>{

        let itemRepedito
        if(itemRepedito = cartList.find(resp => resp.id === productos.id)){

            itemRepedito.cantidad += cantidad

        }else{
            productos.cantidad= cantidad
            SetCartList([ ...cartList, productos])

        }   
        SetProductosTotales(productosTotales + cantidad)
        
    }    
    const vaciarCart = ()=>{
        SetCartList([])
        SetProductosTotales(0)
    }

    const eliminarItem = (id)=>{
        console.log(id)
        // SetCartList([cartList.filter(resp =>resp.id != id)])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            productosTotales,
            agregarCart,
            vaciarCart,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider