import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const productos = JSON.parse(localStorage.getItem('producto'));

        if (!productos || productos.length === 0) {
            alert('No hay productos en el carrito');
            navigate('/');
        } else {
            setUser(window.sessionStorage.getItem('user'));// Para recuperar el usuario almacenado en sessionStorage
            setCarrito(productos); // -----
        }
    }, [navigate]);

    const eliminarDatos = () => {
        localStorage.removeItem('producto');// Borra los productos del carrito
        navigate('./');
    };

    return (
        <div className="container text-center">
            <h1>Carrito de {user}</h1>
            {carrito.map((producto, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                    </div>
                </div>
            ))}
            <button onClick={eliminarDatos} className="btn btn-primary">Vaciar Carrito</button>
        </div>
    );
};

export default Carrito;
