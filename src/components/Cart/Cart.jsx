import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import './Cart.css'
import tacho from '../../images/tacho.jpeg'
import { Form } from "react-bootstrap";
import { useState } from "react";
import ConfirmarCompra from "../ConfirmarCompra/ConfirmarCompra"

function Cart() {
    const { calcularPrecioTotal, eliminarItem, cartList, vaciarCart } = useCartContext()

    const [confirmacionCompra, setConfirmacionCompra] = useState(false)
    const [validacionErronea, setValidacionErronea] = useState(false)
    const [telefono, setTelefono] = useState()
    const [mail, setMail] = useState('')
    const [nombre, setNombre] = useState('')

    const validarMail = (e) => {
        setMail(e.target.value)
    }

    const validarTelefono = (e) => {
        setTelefono(e.target.value)
    }


    const validarNombre = (e) => {
        setNombre(e.target.value)
    }


    const terminarCompra = () => {
        if (mail && nombre && telefono) {

            let orden = {}

            orden.buyer = { name: { nombre }, phone: { telefono }, email: { mail } }
            orden.total = calcularPrecioTotal()

            orden.items = cartList.map(itemOrden => {
                const id = itemOrden.id
                const nombre = itemOrden.producto
                const precio = itemOrden.precio * itemOrden.cantidad

                return { id: id, nombre: nombre, precio: precio }
            })

            const db = getFirestore()
            const queryCollection = collection(db, 'ordenes')
            addDoc(queryCollection, orden)
                .then(resp => setConfirmacionCompra(resp.id))
                .catch(err => console.log(err))
                .finally(() => console.log('terminado'))

            setValidacionErronea(false)
        } else {
            setValidacionErronea(true)
        }

    }

    return (
        <>
            {!confirmacionCompra ?

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

                        <div className='vaciarCarritoContainer'>
                            <button className='vaciarCarrito' style={{ display: 'block' }} onClick={vaciarCart}>
                                Vaciar Carrito
                            </button>
                            <b>
                                Precio Total: ${calcularPrecioTotal()}
                            </b>
                        </div>

                    </div>

                    <div style={{ width: '30%', marginTop: '15px' }}>
                        <>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={mail} onChange={validarMail} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control value={nombre} onChange={validarNombre} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="number" value={telefono} onChange={validarTelefono} />
                                </Form.Group>

                            </Form>


                            <button className='confirmarCompra'onClick={terminarCompra}>
                                Confirmar Compra
                            </button>


                            {validacionErronea ?
                                <div className='mensajeError'>
                                    Por favor, complete todos los datos.
                                </div>

                                :
                                <></>
                            }


                        </>
                    </div>

                </div>

                :

                <ConfirmarCompra id={confirmacionCompra} />


            }

        </>

    )

}

export default Cart