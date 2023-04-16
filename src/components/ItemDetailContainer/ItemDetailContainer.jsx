/*import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { AsynMock ,getCategoria } from '../../AsynMock'


const ItemDetailContainer = (greeting) => {

    const [productos, setProducto] = useState([])

    const {idCategoria} = useParams()

    const functions = async () =>{
        if(IdCategoria){
            return getCategoria(IdCategoria)
        }else{
            return AsynMock()
        }
    }

    useEffect(() => {
        
        functions()
            .then(res => setProductos(res))
            .catch(error => console.log(error))

    }, [IdCategoria])

console.log(productos)

    return (
        <div>
        <h1 className="titulo"> {greeting} </h1>
        <ItemList productos={productos}/>
        </div>
        
    )
}

<div>
            <ItemDetail {...producto}/>
        </div>
export default ItemDetailContainer

//../ItemDetail/ItemDetail*/

import { getUnProducto } from "../../AsynMock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto (idItem)
            .then(res => setProducto(res))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer