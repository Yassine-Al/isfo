import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ModifierFormateur() {

  const { id } = useParams();
    console.log(id)

    const [matricule , setMatricule] = useState('')
    const [nom , setNom] = useState('')
    const [emailedu , setEmailEdu] = useState('')
    const [email , setEmail] = useState('')
    const [tel , setTel] = useState()
    

  const [infoformateur , setInfoFormateur] = useState([])

    useEffect(()=>{
        fetshFormateur()
    }, [])

    const fetshFormateur = async() =>{
        await axios.get(`http://localhost:8000/api/formateur/${id}`)
        .then((res)=>{
            setInfoFormateur(res.data)
            if (res.data.length > 0) {
              setMatricule(res.data[0].Matricule);
              setNom(res.data[0].Nom_Prenom)
              setEmailEdu(res.data[0].Email_Edu)
              setEmail(res.data[0].Email)
              setTel(res.data[0].Tel)
          }
        })
        .catch(({response : res})=>{
            console.log(res.message)
        })
    }
    
    console.log(infoformateur)
    if (infoformateur.length > 0)
    {
      console.log('hello')
    }

  
  
  const navigate = useNavigate()
  
  const Updateformateur = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('_method' , 'PATCH')
    formData.append('Matricule' , matricule)
    formData.append('Nom_Prenom' , nom)
    formData.append('Email_Edu' , emailedu)
    formData.append('Email' , email !== null ? email : null)
    formData.append('Tel', tel !== null ? tel : null);
    console.log(formData)
    
    await axios.post(`http://localhost:8000/api/formateur/${id}`, formData)
    .then(({data})=>{
      console.log(data.message)
      navigate('/Liste_Formateur')
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
  }
  console.log(tel)
  return (
    <main className="main-container" style={{color:'black'}}>
        <h1>Hello</h1>
        <form onSubmit={Updateformateur}>
          <label >Matricule : </label>
          <input type="text" onChange={(e)=>setMatricule(e.target.value)} value={matricule} name='Matricule' />
          <br />
          <label >Nom Prenom : </label>
          <input type="text" onChange={(e)=>setNom(e.target.value)} value={nom} name='Nom_Prenom'/>
          <br />
          <label >Email Edu : </label>
          <input type="text" onChange={(e)=>setEmailEdu(e.target.value)} value={emailedu} name='Email_Edu'/>
          <br />
          <label >Email : </label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name='Email' />
          <br />
          <label >Tel : </label>
          <input type="text" onChange={(e)=>setTel(e.target.value)} value={tel} name='Tel' />
          <br />
          <button type="submit">Update</button>
        </form>
    </main>
  )
}
