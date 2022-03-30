import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './Cart.css'

function Cart() {
    const { calcularPrecioTotal, eliminarItem, cartList, vaciarCart } = useCartContext()
    
    return (
        <div className="contenedorCarrito">
            {cartList.map(item => <div className="contenedorCompra" key={item.id}>

                <div className="imgCompra">
                    <img src={item.img} alt={item.producto} />
                </div>
                <div>
                    <li style={{ display: 'inline', padding: '10px' }}>
                        <b className="infoCompra">{item.producto}</b>
                        <b className="infoCompra">Precio por Unidad: ${item.precio}</b>
                        <b className="infoCompra"> Unidades a comprar: {item.cantidad}</b>
                    </li>
                </div>
                <div className="eliminarItem">
                    <button onClick={()=>eliminarItem(item.id, item.cantidad)}>Eliminar del carrito</button>
                </div>                

            </div>)}

            <div>

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


        </div>
    )
}

export default Cart