import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import { getItem } from '../../AsynMock'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() => {
        getItem(idItem)
            .then(res => setProducto(res))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer

//../ItemDetail/ItemDetail