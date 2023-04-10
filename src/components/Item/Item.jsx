import { useState } from "react";
import "./Item.css"

export const Item = ({nombre,id,precio,img}) => {

        const [mandar, setCarrito] = useState(null)
        let carrito = []
        
        const agrega = () => {
        if(mandar > carrito){
            setCarrito(mandar + 1)
        }
    return{mandar}
    }


    return(

        
        <div className="card">
            <img className="card-img" src={img} alt="" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-precio">${precio}</p>
            <p className="card-id">{id}</p>
            <div className="card-btn">
            <button className="btn">Ver Detalle</button>
            <button onClick={agrega}>Agregar</button>
            </div>
        </div>
)
    }