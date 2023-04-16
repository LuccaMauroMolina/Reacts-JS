//import logo from './logo.png';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Item from "./components/Item/Item"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import React from 'react'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App

/*function App () {

  return (
    <>
      <header className='logo'>
        <img src={logo} alt="" className='logo-medidas' />

        <NavBar/>
      </header>
    
      <ItemListContainer greeting="todo para tu pc" />

      <div className="card">

      </div> 
        
      <ItemDetailContainer/>
    </>
  );
  }
*/

//export default App;
