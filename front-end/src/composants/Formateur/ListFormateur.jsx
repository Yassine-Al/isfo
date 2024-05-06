import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListFormateur() {
  const [formateurs , setFormateurs] = useState([])
  const [formateurHomme, setFormateurHomme] = useState([])
  const [formateurFemme, setFormateurFemme] = useState([])
  const [formateurNull, setFormateurNull] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/formateur')
    .then((res) => {
      setFormateurs(res.data);
      if (res.data.length > 0) {
        setFormateurHomme([res.data[0]]);
        setFormateurFemme([res.data[1]]);
        setFormateurNull([res.data[2]]);
      }
    })
  },[])
  console.log(formateurFemme[0])
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
        <h1>Homme</h1>
        <ul>
          
          {
            formateurHomme.length > 0 && formateurHomme[0].map((formateur) =>{ 
              return <li key={formateur.id}>
                <Link to={`/Info_Formateur/${formateur.id}`}>
                  {formateur.Nom_Prenom}
                </Link></li>
              }
            )
          }
        </ul>
        <h1>Femme</h1>
        <ul>
          {
            formateurFemme.length > 0 && formateurFemme[0].map((formateur) =>{ 
              return <li key={formateur.id}>
                <Link to={`/Info_Formateur/${formateur.id}`}>
                  {formateur.Nom_Prenom}
                </Link></li>
              }
            )
          }
        </ul>
        <h1>Null</h1>
        <ul>
          {
            formateurNull.length > 0 && formateurNull[0].map((formateur) =>{ 
              return <li key={formateur.id}>
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
