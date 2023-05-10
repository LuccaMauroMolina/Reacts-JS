/*import { useState } from 'react'

const ItemCount = ({inicial, stock, Agregar}) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
    <div>
        <button onClick={incrementar}>+</button>
        <p> {contador} </p>
        <button onClick={decrementar}>-</button>
    </div>
    <button onClick={() => Agregar(contador)} >Agregar al Carrito</button>
        </>
    )
}

export default ItemCount   */



//import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p style={{color: "black"}}>{contador}</p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} >Agregar al Carrito</button>
        </>
    )
}

export default ItemCount