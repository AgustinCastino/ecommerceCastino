import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/navBar.jsx';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>
      
    </div>
  );
}

export default App;
