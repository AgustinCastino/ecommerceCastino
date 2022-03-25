import { useCartContext } from '../../context/CartContext'
import carrito from '../../images/carrito.png'
import './CartWidget.css'

function CartWidget(){

    const {productosTotales} = useCartContext()


    return(
        <div>
            <img src={carrito} alt="" />
            <label style={{display: productosTotales > 0 ? 
                'inline' 
                : 
                'none'}}
                > {productosTotales} </label>
        </div>
    )
}

export default CartWidget