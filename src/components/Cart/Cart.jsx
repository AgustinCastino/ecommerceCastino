import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ConfirmarCompra from "../ConfirmarCompra/ConfirmarCompra"
import './Cart.css'

function Cart() {
    const { calcularPrecioTotal, eliminarItem, cartList, vaciarCart } = useCartContext()

    const terminarCompra = () => {
        let orden = {}

        orden.buyer = {name:'agus', phone: '11111', email:'ahhah@gmail.com'}
        orden.total = calcularPrecioTotal()

        orden.items = cartList.map(itemOrden =>{
            const id = itemOrden.id
            const nombre = itemOrden.producto
            const precio = itemOrden.precio * itemOrden.cantidad

            return {id:id, nombre:nombre, precio:precio}
        })

        console.log(orden)

        const db = getFirestore()
        const queryCollection = collection(db, 'ordenes')
        addDoc(queryCollection, orden)
        .then(resp => console.log(`Compra realizada con Exito. Nro de orden: ${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=> console.log('terminado'))

    }
    
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
                    <button onClick={terminarCompra}>
                        Terminar compra
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