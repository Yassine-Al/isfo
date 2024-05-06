import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function InfoGroupe() {

  const {id} = useParams()

  const [goupinfo , setGroupeInfo] = useState([])

  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/groupe/${id}`)
    .then((res) => {
      setGroupeInfo(res.data);
      
    })
  },[])

  const info = {
    Annee : goupinfo.Annee,
    Secteur : goupinfo.Secteur,
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/module/${info}`)
  },[])

  console.log(goupinfo)

  return (
    <main className="main-container" style={{color:'black'}}>
        <h1>Info du Groupe : {goupinfo.Id_Groupe} </h1>
        <Link to={`/ListStagiaireParGroup/${id}`}>
          <button>Liste Stagiaires</button>
        </Link>
        <br />
        <br />
        <hr />
        <br />
        <h1>Module Formateur</h1>
        <table border={3}>
            <thead>
              <tr>
                <th>Code Module</th>
                <th>Module</th>
                <th>Formateur</th>
              </tr>
            </thead>
        </table>

    </main>
  )
}
