import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cartList, SetCartList] = useState([])


    const agregarCart = (item, cantidad) =>{
        let itemRepedito
        
        if(itemRepedito = cartList.find(resp => resp.productos.id === item.id)){
            console.log('ya hay uno igual')
            itemRepedito.cantidad += item.cantidad
            console.log(cartList[0].cantidad || 'primero')

        }else{
            SetCartList([ ...cartList, item ])
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