
import React, { useState } from 'react';

const ProductForm = () => {
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

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
//----
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Producto agregado con éxito');
                setFormData({
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
            } else {
                alert('Error al agregar el producto');
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <main className="product-form">
            <section>
                <h1>Alta de Productos</h1>
                <form id="productForm" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="El nombre debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
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
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="La marca debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />

                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="La categoría debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />

                    <label htmlFor="descripcionCorta">Descripción corta:</label>
                    <textarea
                        id="descripcionCorta"
                        name="descripcionCorta"
                        value={formData.descripcionCorta}
                        onChange={handleChange}
                        required
                        minLength="10"
                        maxLength="500"
                        title="La descripción corta debe tener entre 10 y 500 caracteres."
                    ></textarea>

                    <label htmlFor="descripcionLarga">Descripción larga:</label>
                    <textarea
                        id="descripcionLarga"
                        name="descripcionLarga"
                        value={formData.descripcionLarga}
                        onChange={handleChange}
                        minLength="10"
                        maxLength="500"
                        title="La descripción larga debe tener entre 10 y 500 caracteres."
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
                        title="Introduce una URL válida para la imagen."
                    />

                    <button type="submit">Agregar Producto</button>
                </form>
            </section>
        </main>
    );
};

export default ProductForm;
