import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ({producto, stock, precio}){
    function onAdd(cantidad) {
        console.log(cantidad)
    }

    return(
        <div>
            <div>
                <h2>Detalle</h2>
                <h1>{producto}</h1>
                <p>Precio: {precio}</p>
                <p>Stock: {stock}</p>
                <ItemCount  initial={1} stock={stock} producto={producto} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail