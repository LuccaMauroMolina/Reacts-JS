//import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({nombre,id,precio,img}) => {

    return(

        
        <div className="card">
            <img className="card-img" src={img} alt="" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-precio">${precio}</p>
            <p className="card-id">{id}</p>
            <div className="card-btn">
            <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
            <button>Agregar</button>
            </div>
        </div>
)
    }

export default Item