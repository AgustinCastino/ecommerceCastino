import './App.css';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/navBar.jsx';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer saludo="Bienvenidos al Ecommerce"/>

      <div>
        <ItemList />
      </div>
      
      
    </div>
  );
}

export default App;
