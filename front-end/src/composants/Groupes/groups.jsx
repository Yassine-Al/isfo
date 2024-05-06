// import axios from "axios";
// import React, { useRef, useState } from "react";
// import { MdGroups } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";


// export default function Groups() {
//   const anneeRef = useRef('');
//   const secteurRef = useRef('');

//   const navigate = useNavigate();
  
//   const sendData = async(e) => {
//       e.preventDefault();
//       anneeRef.current = e.target.getAttribute('annee');
//       secteurRef.current = e.target.getAttribute('secteur');
//       const data = ({
//         Secteur : secteurRef.current,
//         Annee : anneeRef.current
//       })
//       // console.log(data)
//       await axios.post('http://localhost:8000/api/groupes/find', data)
//       .then(({data})=>{
//         console.log(data.message)
//         console.log(data)
//         navigate('/Liste-group',{ state: { data: data } })
//       })
//       .catch(({response})=>{
//           if (response.status === 422) 
//           {
//             console.log(response.data.errors)
//           } 
//           else 
//           {
//             console.log(response.data.message)
//           }
//       })
//   }
  
  

//   return (
//     <main className="main-container">
//       <div className="groups">
//         <span id="group-icon">
//           <MdGroups />
//         </span>
//         <h2>Groupes</h2>
//         {/* <p>2</p> */}
//       </div>
//       <div className="deve">
//         <h1>Developpement digitale</h1>
//         <div className="groups-main-cards">
//           <div className="groups-card">
//             <div className="groups-card-inner">
//               <h3>1 année</h3>
//               <MdGroups className="card-icon" />
//             </div>
//             <p>Liste des groupes de 1er annee </p>
//             <Link /*to="/Liste-group"*/ id="link-card">
//               <input type="submit" value="Liste group" annee="1" secteur="Developpement Digital" onClick={sendData}  />
//             </Link>
//           </div>
//           <div className="groups-card">
//             <div className="groups-card-inner">
//               <h3>2eme année</h3>
//               <MdGroups className="card-icon" />
//             </div>
//             <p>Liste des groupes de 2eme annee </p>
//             <Link /*to="/Liste-group"*/ id="link-card">
//               <input type="submit" value="Liste group" annee="2" secteur="Developpement Digital" onClick={sendData}  />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="infra">
//         <h1>Infrastructure Digitale</h1>
//         <div className="groups-main-cards">
//           <div className="groups-card">
//             <div className="groups-card-inner">
//               <h3>1 année</h3>
//               <MdGroups className="card-icon" />
//             </div>
//             <p>Liste des groupes de 1er annee </p>
//             <Link /*to="/Liste-group"*/ id="link-card">
//               <input type="submit" value="Liste group" annee="1" secteur="Infrastructure Digitale" onClick={sendData}  />
//             </Link>
//           </div>
//           <div className="groups-card">
//             <div className="groups-card-inner">
//               <h3>2eme année</h3>
//               <MdGroups className="card-icon" />
//             </div>
//             <p>Liste des groupes de 2eme annee</p>
//             <Link /*to="/Liste-group"*/ id="link-card">
//               <input type="submit" value="Liste group" annee="2" secteur="Infrastructure Digitale" onClick={sendData}  />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


import React from "react";
import { MdGroups } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Groups = () => {
  const navigate = useNavigate();

  const sendData = async (annee, secteur) => {
    try {
      const response = await axios.post('http://localhost:8000/api/groupes/find', { Annee: annee, Secteur: secteur });
      const { data } = response;
      console.log(data.message);
      console.log(data);
      navigate('/Liste-group', { state: { data: data } });
    } catch (error) {
      if (error.response.status === 422) {
        console.log(error.response.data.errors);
      } else {
        console.log(error.response.data.message);
      }
    }
  };

  const renderGroupCard = (annee, secteur, description) => (
    <div className="groups-card">
      <div className="groups-card-inner">
        <h3>{description}</h3>
        <MdGroups className="card-icon" />
      </div>
      <p>{`Liste des groupes de ${description}`}</p>
      <button onClick={() => sendData(annee, secteur)}>Liste group</button>
    </div>
  );

  return (
    <main className="main-container">
      <div className="groups">
        <span id="group-icon">
          <MdGroups />
        </span>
        <h2>Groupes</h2>
      </div>
      <div className="deve">
        <h1>Developpement digitale</h1>
        <div className="groups-main-cards">
          {renderGroupCard(1, "Developpement Digital", "1ère année")}
          {renderGroupCard(2, "Developpement Digital", "2ème année")}
        </div>
      </div>
      <div className="infra">
        <h1>Infrastructure Digitale</h1>
        <div className="groups-main-cards">
          {renderGroupCard(1, "Infrastructure Digitale", "1ère année")}
          {renderGroupCard(2, "Infrastructure Digitale", "2ème année")}
        </div>
      </div>
    </main>
  );
};

export default Groups;
