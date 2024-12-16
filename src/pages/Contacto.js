const Contacto = () => {
 
        const handleSubmit = (event) => {
            //Esto asegura que la función se ejecute cuando el formulario sea enviado, lo uso con el onsubmit del form.
            event.preventDefault(); 
            alert('Formulario enviado con éxito'); 
        };
    return (
        <main className="contacto">
            <section className="contact-form">
                <h1>Contacto</h1>
                <form id="contactForm"onSubmit={handleSubmit} >
                    <label For="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="El nombre debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />
                    <label For="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    <label For="comentarios">Comentarios:</label>
                    <textarea
                        id="comentarios"
                        name="comentarios"
                        required
                        minLength="10"
                        maxLength="500"
                        title="Los comentarios deben tener entre 10 y 500 caracteres."
                    ></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    );
};
export default Contacto;
