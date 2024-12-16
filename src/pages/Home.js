import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Componentes/Sidebar';

const Home = () => {
    const [productos, setProductos] = useState([]); // Estado para los productos
    const [cart, setCart] = useState([]); // Estado para el carrito

    
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL_SERVER_GET); 
                if (!response.ok) throw new Error('Error al obtener productos');
                const data = await response.json();
                setProductos(data); // Actualiza el estado con los productos
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []); 

    const addToCart = (product) => {
        alert(`Producto ${product.nombre} agregado al carrito`);
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('producto', JSON.stringify(updatedCart));
    };

    return (
        <main className="d-flex">
            <aside className="barraLateral">
                <Sidebar />
            </aside>

            <section className="products">
                {productos.length === 0 ? (
                    <p>Cargando productos...</p>
                ) : (
                    productos.map((producto, index) => (
                        <Card className="product-card" key={index}>
                            <Card.Img variant="top" src={producto.foto} alt={producto.nombre} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text className="precio">${producto.precio}</Card.Text>
                                <Card.Text className="description">{producto.descripcionCorta}</Card.Text>
                                <Button className="comprar-btn" onClick={() => addToCart(producto)}>
                                    Agregar al carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </section>
        </main>
    );
};

export default Home;
