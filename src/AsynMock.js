/*const productos = [
    { nombre: "Ryzen 5", id:1, precio: 18000, img: "./imgReact/ryzen5.jpg"},
    { nombre: "Ryzen 7", id:2, precio: 23000, img: "./imgReact/ryzen7.jpg"},
    { nombre: "Intel 5", id:3, precio: 22000, img: "./imgReact/intel5.jpg"},
    { nombre: "Intel 7", id:4, precio: 25000, img: "./imgReact/intel3.jpg"},
    { nombre: "memoria ram 8 gb delta", id:5, precio: 25000, img: "./imgReact/memoria ram 8 gb delta.jpg"},
    { nombre: "memoria ram 8 gb", id:6, precio: 25000, img: "./imgReact/memoria ram 8 gb.jpg"},
    { nombre: "placa video geforce 1650", id:7, precio: 25000, img: "./imgReact/placa video geforce 1650.jpg"},
    { nombre: "placa video gtx 1060", id:8, precio: 25000, img: "./imgReact/placa video gtx 1060.jpg"},
    { nombre: "placa video rtx 2070", id:9, precio: 25000, img: "./imgReact/placa video rtx 2070.jpg"}
]


export const AsynMock = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 100)
    })
}

export const getItem = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const item = productos.find(prod => prod.id === id)
            resolve(item)
        }, 100)
    })
}


export const getCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const categoria = productos.filter(prod => prod.id === idCategoria)
            resolve(categoria)
        }, 100)
    })
}*/

/*const productos = [
    {  nombre: "Procesador Ryzen 5", id:"1", precio: 85000, img: "../imgReact/ryzen5.jpg", stock: 500, idCat:"1"},
    {  nombre: "Procesador Ryzen 7", id:"2", precio: 200000, img: "../imgReact/ryzen7.jpg", stock:  450 , idCat:"1"},
    {  nombre: "Procesador Intel 5", id:"3", precio: 160000, img: "../imgReact/intel5.jpg", stock:  500, idCat:"1"},
    {  nombre: "Procesador Intel 7", id:"4", precio: 195000, img: "../imgReact/intel3.jpg", stock: 120 , idCat:"1"},
    {  nombre: "Memoria ram 8 gb delta", id:"5", precio: 49000, img: "../imgReact/memoria ram 8 gb delta.jpg", stock: 876 , idCat:"3"},
    {  nombre: "Memoria ram 8 gb", id:"6", precio: 52000, img: "../imgReact/memoria ram 8 gb.jpg", stock: 234 , idCat:"3"},
    {  nombre: "Placa video geforce 1650", id:"7", precio: 190000, img: "../imgReact/placa video geforce 1650.jpg", stock: 678 , idCat:"2"},
    {  nombre: "Placa video gtx 1060", id:"8", precio: 200000, img: "../imgReact/placa video gtx 1060.jpg", stock: 246 , idCat:"2"},
    {  nombre: "Placa video rtx 2070", id:"9", precio: 250000, img: "../imgReact/placa video rtx 2070.jpg", stock: 54 , idCat:"2"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}*/