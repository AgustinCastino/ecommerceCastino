import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

function Cart() {
    const { calcularPrecioTotal, eliminarItem, cartList, vaciarCart } = useCartContext()
    
    return (
        <div>
            {cartList.map(item => <div key={item.id}>
                <li style={{ display: 'inline', padding: '10px' }}>{item.producto} {item.cantidad}</li>

                <button onClick={()=>eliminarItem(item.id, item.cantidad)}>Eliminar {item.id}</button>

            </div>)}

            {cartList.length > 0 ? <>
                Precio Total: ${calcularPrecioTotal()}
                <button style={{display:'block'}} onClick={vaciarCart}>
                    Vaciar Carrito
                </button>
            </>
            
                :
                <>
                    <h1>Carrito Vacio</h1>
                    <Link to='/'>
                        <button>
                            Ir a Comprar
                        </button>
                    </Link>
                </>
            }


        </div>
    )
}

export default Cart