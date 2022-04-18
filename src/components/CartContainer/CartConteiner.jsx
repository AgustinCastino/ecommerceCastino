import Cart from "../Cart/Cart"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



function CartContainer() {
    const { cartList } = useCartContext()

    return(
        
        <>
            {cartList.length > 0 ?

                <Cart />

                :

                <div className='carritoVacio'>
                    <h1>Carrito Vacío</h1>
                    <Link to='/'>
                        <button>
                            Ir a Comprar
                        </button>
                    </Link>
                </div>

            }

        </>
    )
    
}

export default CartContainer