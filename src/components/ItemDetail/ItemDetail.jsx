function ItemDetail ({producto, stock, precio}){
    return(
        <div>
            <div>
                <h2>Detalle</h2>
                <h1>{producto}</h1>
                <p>Precio: {precio}</p>
                <p>Stock: {stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail