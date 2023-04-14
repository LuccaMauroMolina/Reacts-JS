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
      <NavBar/>
            <Routes>
                  <Route exact path='/' element={ <ItemListContainer/> }/>
                  <Route exact path='/categoria/:IdCategoria:' element={ <ItemListContainer/> }/>
                  <Route exact path='/item/:idItem' element={ <ItemDetailContainer/> }/>
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
