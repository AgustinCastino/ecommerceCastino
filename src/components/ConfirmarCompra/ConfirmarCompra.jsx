import './ConfirmarCompra.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'


function ConfirmarCompra({ id }) {
    const { vaciarCart } = useCartContext()

    return (
        <>
            <div className='contenedorCompra'>
                <h1> Compra realizada con Éxito</h1>
                <h5> Número de orden: {id}</h5>
            </div>
            <Link to='/'>
                <button className='finalizarCompra' onClick={vaciarCart}>
                    <b>Finalizar compra</b>
                </button>
            </Link>
        </>
    )
}

export default ConfirmarCompra