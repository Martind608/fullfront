import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProductForm = () => {
    const { id } = useParams(); // Obtenemos el ID 
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        descripcionCorta: '',
        descripcionLarga: '',
        envio: false,
        edadDesde: '',
        edadHasta: '',
        foto: '',
    });

    // const [loading, setLoading] = useState(true); // Estado carga
    // const [error, setError] = useState(null); // Estado errores
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    // Carga de datos del producto
    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/productos/${id}`);

                setFormData(data); // Precargar los datos del producto
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Error al cargar el producto');
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { precio, stock } = formData;

            // Validación básica
            if (precio < 0) return alert('El precio no puede ser negativo');
            if (stock < 0) return alert('El stock no puede ser negativo');

            await axios.put(`${API_BASE_URL}/productos/${id}`, formData);
            alert('Producto actualizado con éxito');
            navigate('/stock'); 
        } catch (err) {
            console.error('Error al actualizar producto:', err);
            alert(err.response?.data?.mensaje || 'Error al conectar con el servidor');
        }
    };

    // Eliminar producto
    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            try {
                await axios.delete(`${API_BASE_URL}/productos/${id}`);
                alert('Producto eliminado con éxito');
                navigate('/stock'); // Redirigir después de eliminar
            } catch (err) {
                console.error('Error al eliminar el producto:', err);
                alert(err.response?.data?.mensaje || 'Error al conectar con el servidor');
            }
        }
    };

    // if (loading) return <p>Cargando datos del producto...</p>;
    // if (error) return <p>{error}</p>;

    return (
        <main className="product-form">
            <section>
                <h1>Editar Producto</h1>
                <form id="productForm" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="marca">Marca:</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        value={formData.marca}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="descripcionCorta">Descripción corta:</label>
                    <textarea
                        id="descripcionCorta"
                        name="descripcionCorta"
                        value={formData.descripcionCorta}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <label htmlFor="descripcionLarga">Descripción larga:</label>
                    <textarea
                        id="descripcionLarga"
                        name="descripcionLarga"
                        value={formData.descripcionLarga}
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="envio">Envío sin cargo:</label>
                    <input
                        type="checkbox"
                        id="envio"
                        name="envio"
                        checked={formData.envio}
                        onChange={handleChange}
                    />

                    <label htmlFor="edadDesde">Edad desde:</label>
                    <input
                        type="number"
                        id="edadDesde"
                        name="edadDesde"
                        value={formData.edadDesde}
                        onChange={handleChange}
                    />

                    <label htmlFor="edadHasta">Edad hasta:</label>
                    <input
                        type="number"
                        id="edadHasta"
                        name="edadHasta"
                        value={formData.edadHasta}
                        onChange={handleChange}
                    />

                    <label htmlFor="foto">Foto (URL):</label>
                    <input
                        type="url"
                        id="foto"
                        name="foto"
                        value={formData.foto}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Guardar Cambios</button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '10px',
                            border: 'none',
                            marginTop:'2px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                    
                        }}
                    >
                        Eliminar Producto
                    </button>
                </form>
            </section>
        </main>
    );
};

export default EditProductForm;
