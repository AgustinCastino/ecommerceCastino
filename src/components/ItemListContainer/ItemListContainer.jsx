// funciona como componente contenedor del componente Greeting.jsx

import ItemList from "../ItemList/ItemList"

function ItemListContainer(){
    return(
      <div>
          <ItemList />
      </div>  
    )
}

export default ItemListContainer