import React from "react";
import "./ItemListContainer.css"



function ItemListContainer(prop) {
    return(
        <h1 className="titulo"> {prop.greeting} </h1>
    )

}

export default ItemListContainer