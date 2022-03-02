import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/navBar.jsx';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer saludo="Bienvenidos al Ecommerce"/>
      <div className='cards'>
        <ItemCount producto = "Zapatila Nike" stock= { 5 } initial = {1} />
        <ItemCount producto = "Zapatila Adidas" stock= { 3 } initial = {1} />
      </div>
      
      
    </div>
  );
}

export default App;
