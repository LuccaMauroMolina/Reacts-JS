const productos = [
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
}