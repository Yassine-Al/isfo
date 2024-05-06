import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AjouterFormateur() {
  const [matricule , setMatricule] = useState()
  const [nom , setNom] = useState()
  const [emailedu , setEmailEdu] = useState()
  const [sexe , setSexe] = useState('')
  const [email , setEmail] = useState()
  const [tel , setTel] = useState()

  console.log(sexe)

  const navigate = useNavigate()

  const createformateur = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('Matricule' , matricule)
    formData.append('Nom_Prenom' , nom)
    formData.append('Sexe' , sexe)
    formData.append('Email_Edu' , email)
    formData.append('Email' , email)
    formData.append('Tel' , email)

    console.log(formData)

    await axios.post('http://localhost:8000/api/formateur', formData)
    .then(({data})=>{
      console.log(data.message)
    })
    .catch(({response})=>{
        if (response.status === 422) 
        {
          console.log(response.data.errors)
        } 
        else 
        {
          console.log(response.data.message)
        }
    })
    // navigate('/Liste_Formateur')
    }

  return (
    <main className="main-container" style={{color:'black'}}>
        <h1>Hello</h1>
        <form onSubmit={createformateur}>
          <input type="hidden" name="" />
          <label >Matricule : </label>
          <input type="text" onChange={(e)=>setMatricule(e.target.value)} value={matricule}  />
          <br />
          <label >Nom Prenom : </label>
          <input type="text" onChange={(e)=>setNom(e.target.value)} value={nom} />
          <br />
          <label >Email Edu : </label>
          <input type="text" onChange={(e)=>setEmailEdu(e.target.value)} value={emailedu} />
          <br />
          <label >Sexe : </label>
          <select onChange={(e)=>setSexe(e.target.value)} value={sexe}>
            <option value="">Choisir le sexe</option>
            <option value="F">Femme</option>
            <option value="H">Homme</option>
          </select>
          <br />
          <label >Email : </label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
          <br />
          <label >Tel : </label>
          <input type="text" onChange={(e)=>setTel(e.target.value)} value={tel} />
          <br />
          <button type="submit">Save</button>
        </form>
    </main>
  )
}
