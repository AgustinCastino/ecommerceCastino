// funciona como componente contenedor del componente Greeting.jsx

import ItemList from "../ItemList/ItemList"

function ItemListContainer({saludo}){
    return(
      <div>
          <h1>{saludo}</h1>
          <ItemList />
      </div>  
    )
}

export default ItemListContainer