//import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";
//import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
//import { useState, useEffect} from "react";
//import { db } from "../../Services/firebase/config"


const Item = ({nombre,id,precio,img,stock, productos}) => {

    return(
        <div className="prod">
                    <div className="card" key={id}>
                    <img className="card-img" src={img} alt="" />
                        <h2 className="card-name">{nombre}</h2>
                        <p className="card-precio">{precio}</p>
                        <p className="card-id">{id}</p>
                        <p className="card-stock">{stock}</p>
                        <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
                    </div>
        </div>
    )
    
    
}
    /*return (
        <div className='prod'>
        <div className="card">
            <img className="card-img" src={img} alt="" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-precio">${precio}</p>
            <p className="card-id">{id}</p>
            <p className="card-stock">{stock}</p>
            <div className="card-btn">
            <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
            </div>
        </div>
        </div>
    )
}*/


/*import "./Item.css"
import { Link } from "react-router-dom";
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
import { useState, useEffect} from "react";
import { db } from "../../Services/firebase/config"


const Item = (id, img) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //Creamos una consulta a la colección "productos"
        const q = query(collection(db, "productos"));

        //onSnapShot es una función que escucha los cambios en la consulta. 

        const modificar = onSnapshot(q, function (querySnapShot) {
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setProductos(docs);
        });

        return () => {
            modificar();
        };
    }, []);

    ///Función para bajar el stock cuando el usuario compra: 
    const bajarStock = (id, stock) => {
        if (stock > 0) {
            const productoRef = doc(db, "productos", id);
            updateDoc(productoRef, {
                stock: stock - 1,
            })
                //updateDoc me actualiza el documento. 
                .then(() => {
                    console.log("El stock se actualizó correctamente");
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="productos">
            {
                productos.map((producto) => (
                    <div className="card" key={producto.id}>
                        <img className="card-img" src={img} alt="" />
                        <h2 className="card-name">{producto.nombre}</h2>
                        <p className="card-precio">{producto.precio}</p>
                        <p className="card-id">{producto.id}</p>
                        <p className="card-stock">{producto.stock}</p>
                        <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
                        <button onClick={() => bajarStock(producto.id, producto.stock)}> Finalizar Compra </button>
                    </div>
                ))
            }

        </div>
    )
}*/

export default Item