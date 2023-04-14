import { useEffect, useState } from "react";
import { getItem, getCategoria } from "../../AsynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const { idCategoria } = useParams()

    useEffect(() => {
        const funciones = idCategoria ? getCategoria : getCategoria

        funciones(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))

    }, [idCategoria])


    return(
        <div>
        <h1 className="titulo"> {greeting} </h1>
        <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer