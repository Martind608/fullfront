import React from 'react';
import '../App.css'

function Sidebar() {
    return (
        <div className="barra-lateral">
            <h2>Filtrar por Categoría</h2>
            <ul>
                <li><input type="checkbox" id="lentes-sol" name="categoria" value="Lentes de Sol" /><label htmlFor="lentes-sol"> Lentes de Sol</label></li>
                <li><input type="checkbox" id="lentes-vista" name="categoria" value="Lentes de Vista" /><label htmlFor="lentes-vista"> Lentes de Vista</label></li>
                <li><input type="checkbox" id="lentes-contacto" name="categoria" value="Lentes de Contacto" /><label htmlFor="lentes-contacto"> Lentes de Contacto</label></li>
                <li><input type="checkbox" id="accesorios" name="categoria" value="Accesorios" /><label htmlFor="accesorios"> Accesorios</label></li>
                <li><input type="checkbox" id="limpieza" name="categoria" value="Productos de Limpieza" /><label htmlFor="limpieza"> Productos de Limpieza</label></li>
            </ul>
        </div>
    );
}

export default Sidebar;
