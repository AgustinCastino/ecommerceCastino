import { Form } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";


function FormularioCompra() {
    const { calcularPrecioTotal, cartList } = useCartContext()
    const [confirmacionCompra, setConfirmacionCompra] = useState(0)

    
    const terminarCompra = () => {

        let orden = {}

        orden.buyer = { name: 'agus', phone: '11111', email: 'ahhah@gmail.com' }
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
        
    }
     
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
            </Form>

            {confirmacionCompra ?
                <h3> Compra realizada con id {confirmacionCompra}</h3>
                :
                <button onClick={terminarCompra}>
                    Confirmar Compra
                </button>
            }


        </>
    )
}

export default FormularioCompra