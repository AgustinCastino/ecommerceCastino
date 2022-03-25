import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

function Cart() {
    const { eliminarItem, cartList, vaciarCart } = useCartContext()
    console.log(cartList)

    // const eliminarItem = (e)=>{
    //     console.log(e.id)
    // }
    
    return (
        <div>
            {cartList.map(item => <div key={item.id}>
                <li style={{ display: 'inline', padding: '10px' }}>{item.producto} {item.cantidad}</li>

                <button onClick={()=>eliminarItem(item.id)}>Eliminar {item.id}</button>

                {/* <button onClick={(eliminarItem)=>{
                    cartList.filter(resp => SetCartList(resp.id != item.id))
                }}>Eliminar {item.id}</button> */}
            </div>)}

            {cartList.length > 0 ? <button onClick={vaciarCart}>
                Vaciar Carrito
            </button>
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