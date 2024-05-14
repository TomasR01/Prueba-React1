import { useState, useEffect } from "react";

function Buscador ({onSearch}) {
const [busqueda, setBusqueda ] =useState("");

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setBusqueda(searchTerm)
        onSearch(searchTerm)
    };
    
    return (
        <>
        <input
        type="text"
        placeholder="Busca tu personaje"
        className="form-control-lg mb-3 text-cener font-weight-bold"
        value={busqueda}
        onChange={handleChange}
        />{""}
        <button className="btn btn-info btn-lg btn-block mb-4 mt-3 font-weight-bold">
        {""} Buscar{""}
        </button>
        </>
    );
};


export default Buscador;
