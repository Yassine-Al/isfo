import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ListStagiaireParGroupe() {
    const {id} = useParams()
    console.log(id)
    const [stagiaires , setStagiaires] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/stagiaire/groupe/${id}`)
      .then((res)=>setStagiaires(res.data))
    },[])
    console.log(stagiaires)

  return (
    <main className="main-container" style={{color:'black'}}>
      <h1>Tableu de Stagiaire</h1>
      <table border={3}>
        <thead>
            <tr>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Cin</th>
                <th>Nom Arabe</th>
                <th>Prenom Arabe</th>
            </tr>
        </thead>
        <tbody>
            {
                stagiaires.map((stg) => {
                    return (
                        <tr>
                            <td>{stg.Matricule}</td>
                            <td>{stg.Nom}</td>
                            <td>{stg.Prenom}</td>
                            <td>{stg.Cin}</td>
                            <td>{stg.Nom_Arabe}</td>
                            <td>{stg.Prenom_Arabe}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </main>
  )
}
