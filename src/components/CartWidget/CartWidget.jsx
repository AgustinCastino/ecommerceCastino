import { useCartContext } from '../../context/CartContext'
import carrito from '../../images/carrito.png'
import './CartWidget.css'

function CartWidget(){

    const {productosTotales} = useCartContext()


    return(
        <div>
            <img className='imgCarrito'src={carrito} alt="" />
            <label className='contadorCarrito' style={{display: productosTotales > 0 ? 
                'inline-block' 
                : 
                'none'}}
                > {productosTotales} </label>
        </div>
    )
}

export default CartWidget