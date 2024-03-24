import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


export default function ListeGroups() {

  const location = useLocation()
  const { data } = location.state;

  console.log(data)


  return (
    <main className="main-container">
      <div className="filtrage">
        <div className="number-group">
          <h3 className="groups-h3">Groupes existant</h3>
          <h3 className="group-number">(4)</h3>
        </div>
        <div className="add-group">
          <button id="Ajouter-group" >Ajouter</button>
        </div>
      </div> 
      <br />
      <div style={{color:'black'}}>
          <h1 >Hello</h1>
          <ul>
              {
                data.map(grp => {
                  return <li>
                    <Link to={`/ListStagiaireParGroup/${grp.id}`}>
                      {grp.Id_Groupe}
                    </Link>
                    </li>
                })
              }
          </ul>
        </div>
    </main>
  );
}
