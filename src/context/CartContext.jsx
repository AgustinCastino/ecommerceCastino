import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cartList, SetCartList] = useState([])


    const agregarCart = (productos, cantidad) =>{

        let itemRepedito
        if(itemRepedito = cartList.find(resp => resp.id === productos.id)){

            itemRepedito.cantidad += cantidad

        }else{
            productos.cantidad= cantidad
            SetCartList([ ...cartList, productos])

        }            
    }    

    console.log(cartList)
    const vaciarCart = ()=>{
        SetCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider