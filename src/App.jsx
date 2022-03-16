import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/navBar.jsx';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path = '/' element={<ItemListContainer saludo="Bienvenidos al Ecommerce"/>}/>
          <Route path = '/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path = '/detalle/:Id'element={<ItemDetailContainer/>}/>
          <Route path = '/*'element={<Navigate to='/' replace/>}/>

        </Routes> 

      </div>
    </BrowserRouter>
  );
}

export default App;
