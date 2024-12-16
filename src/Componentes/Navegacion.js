import logo from '../Logo/logo.png'
import '../App.css'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navegacion = () => {
    return (
        <>
            <div className="col text-left d-none d-md-block">
                <FaInstagram className="social-icon" />
                <FaFacebook className="social-icon" />
            </div>
            <header>
        
            
                <div class="logo">
                    <img src={logo} alt="Óptica Tech"/>
                </div>
                <nav>
                    <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/alta">Alta de Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/stock">Stock</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                            <Link to="/carrito">
                            <i class="bi bi-cart-check-fill">
                                Carrito
                            </i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <SearchBar />
            </header>
        </>
    );
}


export default Navegacion;