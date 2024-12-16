
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Footer from './Componentes/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alta from './pages/Alta';         
import Contacto from './pages/Contacto'; 
import Nosotros from './pages/Nosotros';
import Error from './Error/Error';
import Login from './Login/Login';
import Carrito from './Carrito/Carrito';
import Stock from './pages/Stock'; 
import EditProductForm from './pages/EditProductForm';


function App() {
  return (


    <div className="google">
      <Navegacion />
      <main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<Error />} />
        <Route path="/stock" element={<Stock />} /> 
        <Route path="/editar-producto/:id" element={<EditProductForm />} />

        <Route path="/carrito" element={<Carrito/>} />
      </Routes>


      </main>
      <Footer />
    </div>
  );
}

export default App;
