import React, { useState } from 'react'
import { db } from '../../Services/firebase/config';
import { collection, addDoc } from "firebase/firestore";
import './Formulario.css'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [celular, setCelular] = useState("")

    const Formulario = (event) => {
        event.preventDedault();

        addDoc(collection(db, "usuario"), {
            nombre:nombre,
            apellido:apellido,
            celular:celular,
        })

        setNombre("");
        setApellido("");
        setCelular("");


    }


    return (
    <form onSubmit={Formulario}>
        <label htmlFor="nombre">Nombre</label>
            <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>

        <label htmlFor="apellido">Apellido</label>
            <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required />

        <label htmlFor="celular">Celular</label>
            <input type="text" value={celular} onChange={(event) => setCelular(event.target.value)} required />

    </form>
    )
}

export default Formulario