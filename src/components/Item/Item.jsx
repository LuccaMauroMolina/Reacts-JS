//import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";
//import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
//import { useState, useEffect} from "react";
//import { db } from "../../Services/firebase/config"


const Item = ({nombre,id,precio,img,stock}) => {

    /*const [productos, setProductos] = useState([]);

    useEffect(() => {
        const querq = query(collection(db, "productos"));

        const modificar = onSnapshot(querq, function (querySnapShot){
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push({id: doc.id, ...doc.data() });
            });
            setProductos(docs)
        });
        return () => {
            modificar();
        };
    }, []);

    const bajarStock = (id, stock) => {
        if(stock > 0) {
            const productoRef = doc(db, "producto", id);
            updateDoc(productoRef, {
                stock: stock - 1,
            })

            .then(() => {
                console.log("El stock se actualizo");
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }*/

    /*return(
        <div className="prod">
            {
                productos.map((producto) => (
                    <div className="card" key={producto.id}>
                        <h2 className="card-name">{producto.nombre}</h2>
                        <p className="card-precio">{producto.precio}</p>
                        <p className="card-id">{producto.id}</p>
                        <p className="card-stock">{producto.stock}</p>
                        <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
                        <button onClick={() => bajarStock(producto.id, producto.stock)}> Compra </button>
                    </div>
                ))
            }
        </div>
    )
}*/
    return (
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
}

export default Item;