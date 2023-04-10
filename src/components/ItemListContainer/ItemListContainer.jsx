import React, { useEffect, useState } from "react";
import { AsynMock } from "../../AsynMock";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";


function ItemListContainer(prop) {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        AsynMock()
            .then(resolve => setProductos(resolve))
            .catch(reject => console.log(reject))

    }, [])


    return(
        <div>
        <h1 className="titulo"> {prop.greeting} </h1>
        <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer