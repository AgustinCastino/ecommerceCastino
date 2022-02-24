// funciona como componente contenedor del componente Greeting.jsx

function ItemListContainer({saludo}){
    return(
      <div>
          <h1>{saludo}</h1>
      </div>  
    )
}

export default ItemListContainer