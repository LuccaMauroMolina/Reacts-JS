/*import { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Context } from '../CartContext/CartContext'
import { useContext } from 'react'
const ItemDetail = ({id, nombre, precio, img, stock}) => {
    
    const [Cantidad, setCantidad] = useState(0)

    const {producto} = useContext(Context)


    const Cantidades = (cantidad) => {
        setCantidad(cantidad);

        const item = {id, precio, nombre};
        producto(item, cantidad);
    
        console.log("productos agregado: " + cantidad)
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre:{nombre}</h2>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
            <img src= {img} alt= {nombre} />

            {
            Cantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} agregar={Cantidades} />) 
            }
        </div>
    )
}

export default ItemDetail  */


import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../CartContext/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {



const [agregarCantidad, setAgregarCantidad] = useState(0);


const {agregarProducto} = useContext(CarritoContext);



const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);


    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
}
return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
        <img src={img} alt={nombre} />
    {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
    }
    </div>
)
}

export default ItemDetail