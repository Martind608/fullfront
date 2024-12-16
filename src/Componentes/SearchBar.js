import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." />
            <FaSearch className="search-icon" />
        </div>
    );
}

export default SearchBar;