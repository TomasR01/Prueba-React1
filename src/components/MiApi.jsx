import React, { useState, useEffect } from "react";
import "./MiApi.css";

const MiApi = ({ info, setInfo, busqueda }) => {
  const url = "https://rickandmortyapi.com/api/character";
  const [orden, setOrden] = useState("asc");

  const apiData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Hay un error en la api");
      }
      const data = await resp.json();
      const filteredData = data.results.filter((character) =>
        character.name.toLowerCase().includes(busqueda.toLowerCase())
      );

      const sortedData = filteredData.sort((a, b) => {
        if (orden === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      setInfo(sortedData);
    } catch (error) {
      console.log({ message: error });
    }
  };

  useEffect(() => {
    apiData();
  }, [busqueda, orden]);

  const toggleOrden = () => {
    setOrden(orden === "asc" ? "desc" : "asc")
  }

  return (
    <div className="cards">
      {info.map((e) => (
        <div key={e.id} className="card">
          <img src={e.image} className="card-img-top" alt={e.name} />
          <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
            <p className="card-text">
              <strong>Estado y Especie:</strong> {e.status} - {e.species}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiApi;
