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
        console.log(cartList)
        
    }    
    const vaciarCart = ()=>{
        SetCartList([])
        SetProductosTotales(0)
    }

    const eliminarItem = (id,cantidad)=>{
        SetCartList(cartList.filter(resp =>resp.id != id))
        SetProductosTotales(productosTotales - cantidad)
    }
    

    const calcularPrecioTotal = ()=>{
        console.log(cartList)
        let precioTotal = 0

        for(let i = 0; i < cartList.length;i++){
            precioTotal = precioTotal + cartList[i].precio * cartList[i].cantidad
        }
        return precioTotal

    
    }

    

    return(
        <CartContext.Provider value={{
            cartList,
            productosTotales,
            agregarCart,
            vaciarCart,
            eliminarItem,
            calcularPrecioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider