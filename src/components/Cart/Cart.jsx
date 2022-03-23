import { useCartContext } from "../../context/CartContext"

function Cart(){
    const {cartList, vaciarCart} = useCartContext()
    console.log(cartList)
    return(
        <div> 
            {cartList.map(item=><li key={item.id}>{item.producto} {item.cantidad}</li>)}

            
            {cartList.length > 0 ? <button onClick={vaciarCart}> Vaciar Carrito </button>
            :
            <h1>Carrito Vacio</h1>
            }  
            
        </div>
    )
}

export default Cart