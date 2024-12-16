import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/productos');
                if (!response.ok) throw new Error('Error al obtener productos');
                const data = await response.json();
                setProductos(data); //  ----Guarda los productos en el estado
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Gestión de Stock</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Nombre</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Precio</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Stock</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto._id}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{producto.nombre}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>${producto.precio}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{producto.stock}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                                <button
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate(`/editar-producto/${producto._id}`)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stock;
