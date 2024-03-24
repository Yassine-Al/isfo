import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListFormateur() {
  const [formateurs , setFormateurs] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/formateur')
    .then((res)=>setFormateurs(res.data))
  },[])
  console.log(formateurs)
  return (
    <main className="main-container" style={{color:'black'}}>
        <h1>Hello World !</h1>
        <br />
        <button>
          <Link to={"/Ajouter_Formateur"}>
            Ajouter Formateur
          </Link>
        </button>
        <br />
        <br />
        <ul>
          {
            formateurs.map((formateur) =>{ 
              return <li>
                <Link to={`/Info_Formateur/${formateur.id}`}>
                  {formateur.Nom_Prenom}
                </Link></li>
              }
            )
          }
        </ul>
    </main>
  )
}
