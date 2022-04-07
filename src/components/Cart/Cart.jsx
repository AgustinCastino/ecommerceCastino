import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './Cart.css'
import tacho from '../../images/tacho.jpeg'
import FormularioCompra from "../FormularioCompra/FormularioCompra"


function Cart() {
    const { calcularPrecioTotal, eliminarItem, cartList, vaciarCart } = useCartContext()

    return (
        <>
            {cartList.length > 0 ?

                <div className="contenedorCarrito">
                    <div>
                        {cartList.map(item => <div className="contenedorItemComprado" key={item.id}>

                            <div className="imgCompra">
                                <img src={item.img} alt={item.producto} />
                            </div>
                            <div className="infoCompra">
                                <li style={{ display: 'inline', padding: '10px' }}>
                                    <p className="infoCompra">{item.producto}</p>
                                    <p className="infoCompra">Precio por Unidad: ${item.precio}</p>
                                    <p className="infoCompra"> Unidades a comprar: {item.cantidad}</p>
                                </li>
                            </div>
                            <div className="eliminarItem">
                                <button onClick={() => eliminarItem(item.id, item.cantidad)}><img src={tacho}></img></button>
                            </div>

                        </div>)}

                        <div>
                            Precio Total: ${calcularPrecioTotal()}
                            <button style={{ display: 'block' }} onClick={vaciarCart}>
                                Vaciar Carrito
                            </button>
                        </div>

                    </div>

                    <div style={{ width: '30%', marginTop: '15px' }}>
                        <FormularioCompra/>
                    </div>

                </div>

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

export default Cart