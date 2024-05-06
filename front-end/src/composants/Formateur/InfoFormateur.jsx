import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function InfoFormateur() {

    const { id } = useParams();
    console.log(id)

    const [infoformateur , setInfoFormateur] = useState([])

    useEffect(()=>{
        fetshFormateur()
    },[])

    const fetshFormateur = async() =>{
        await axios.get(`http://localhost:8000/api/formateur/${id}`)
        .then((res)=>{
            setInfoFormateur(res.data)
        })
        .catch(({response : res})=>{
            console.log(res.message)
        })
    }
    
    console.log(infoformateur)

  return (
    <main className="main-container" style={{color:'black'}}>
        <h1>Hello</h1>
        <button>
            <Link to={`/Modifier_Formateur/${id}`}>
                Modifier Formateur
            </Link>
        </button>
        { infoformateur.length > 0 ? 
        <div>
            <p>Matricule <span>{infoformateur[0].Matricule}</span></p>
            <p>Nom et Prenom <span>{infoformateur[0].Nom_Prenom}</span></p>
            <p>Email Edu <span>{infoformateur[0].Email_Edu}</span></p>
            <p>Email <span>{infoformateur[0].Email}</span></p>
            <p>Tel : <span>0{infoformateur[0].Tel}</span></p>
        
            <hr />
            <div>
                <h3>Groups</h3>
                <table border={3}>
                    <thead>
                        <tr>
                            <th>Groupe</th>
                            <th>Module</th>
                            <th>Nom Module</th>
                            <th>Mass Horaire</th>
                            <th>Heure Presentielle</th>
                            <th>Heure A distance</th>
                        </tr>
                    </thead>
                </table>
            </div>
            </div>
        : ''}
    </main>
  )
}
