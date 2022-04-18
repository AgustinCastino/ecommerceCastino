import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/navBar.jsx';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import CartContextProvider from '../src/context/CartContext'
import CartContainer from './components/CartContainer/CartConteiner';

function App() {

  return (
    <CartContextProvider>

      <BrowserRouter>

        <div className="App">
          <NavBar />
          <Routes>
            <Route path = '/' element={<ItemListContainer/>}/>
            <Route path = '/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path = '/detalle/:Id'element={<ItemDetailContainer/>}/>
            <Route path = '/cart'element={<CartContainer />}/>
            <Route path = '/*'element={<Navigate to='/' replace/>}/>
          </Routes> 
          
        </div>

      </BrowserRouter>
    </CartContextProvider>


  );
}

export default App;
