import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/App.css";
import Accueil from "./Accueil";
import Saidbar from "./Navbar";
import Header from "./header";
import Ts from "./Ts";
import Groups from "./Groupes/groups";
import ListeGroups from "./Groupes/liste-groups";
import ListFormateur from "./Formateur/ListFormateur";
import AjouterFormateur from "./Formateur/AjouterFormateur";
import InfoFormateur from "./Formateur/InfoFormateur";
import ModifierFormateur from "./Formateur/ModifierFormateur";
import ListStagiaireParGroupe from "./Groupes/ListStagiaireParGroupe";
import InfoGroupe from "./Groupes/InfoGroupe";
import AjouterElement from "./Microservice/AjouterElement";

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Saidbar />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Ts" element={<Ts />} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Liste-group" element={<ListeGroups />} />
          <Route path="/Liste_Formateur" element={<ListFormateur/>} />
          <Route path="/Ajouter_Formateur" element={<AjouterFormateur/>} />
          <Route path="/Modifier_Formateur/:id" element={<ModifierFormateur/>} />
          <Route path="/Info_Formateur/:id" element={<InfoFormateur/>} />
          <Route path="/ListStagiaireParGroup/:id" element={<ListStagiaireParGroupe/>} />
          <Route path="/InfoGroup/:id" element={<InfoGroupe/>} />

          <Route path="/addElement" element={<AjouterElement/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
