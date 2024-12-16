import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../App.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Categorías</h3>
                    <ul>
                        <li>Inicio</li>
                        <li>HOT WEEK</li>
                        <li>Lentes de sol</li>
                        <li>Armazones</li>
                        <li>Lentes oftálmicas</li>
                        <li>Contacto</li>
                        <li>Política de devolución</li>
                        <li>Sobre Nosotros</li>
                        <li>Gift Card</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contáctanos</h3>
                    <ul>
                        <li><i className="fas fa-phone"></i> 00000000875</li>
                        <li><i className="fas fa-phone-alt"></i> 200004876 SHOP 487476754576 CENTRO</li>
                        <li><i className="fas fa-envelope"></i> opticatech@gmail.com</li>
                        <li><i className="fas fa-map-marker-alt"></i> <i class="fas fa-scanner-touchscreen    "></i> San Luis 174 local 1502</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <FaInstagram className="social-icons" />
                        <FaFacebook className="social-icons" />
                    </div>
                </div>
            </div>
            <div className="footer-payment">
                <h3>Medios de pago</h3>
                <img src="ruta" alt="Logos de medios de pago" />
            </div>
            <div className="footer-shipping">
                <h3>Medios de envío</h3>
                <img src="ruta" alt="Logos de medios de envío" />
            </div>
            <div className="footer-bottom">
                <p>© 2024 Optica-tech. Todos los derechos reservados. Defensa de las y los consumidores. <Link>Para reclamos ingresá acá.</Link> </p>
            </div>
        </footer>
    );
}

export default Footer;