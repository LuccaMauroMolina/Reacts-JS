import './ItemDetail.css'

const ItemDetail = ({id, img, precio, nombre}) => {
    return (
        <>
        <div className='contenedorItem'>
            <img src={img} alt=""/>
            <h2>{nombre}</h2>
            <span>{precio}</span>
            <span>{id}</span>
            <p>esta placa de video les ayudara a tener un buen rendimiento ya que cuente con 8ram y buenos graficos</p>

        </div>
        </>
    )
}

export default ItemDetail