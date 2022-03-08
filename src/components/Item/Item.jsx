import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

 
function Item({producto, stock}) {
    
    function onAdd(cantidad){
        console.log(cantidad)
    }

    return (
        <div className="card">
            <h2>{producto} </h2>
            <div className="imagen">Acá va una imagen del producto</div>    
            <ItemCount  initial={1} stock={stock} producto={producto} onAdd={onAdd}/>
            
        </div>
    );
}

export default Item