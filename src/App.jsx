//import logo from './logo.jpg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import logo from "./logo.png"
//import Item from "./components/Item/Item"

function App () {

  return (
    <>
      <header className='logo'>
        <img src={logo} alt="" className='logo-medidas' />

        <NavBar/>
      </header>
    
      <ItemListContainer greeting="todo para tu pc" />

      <div className="card">

      </div> 
        
    </>
  );
  }


export default App;
