import React from "react";
import { MdGroups } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import Chart1 from "./chart1";

function Accueil() {
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Groupes</h3>
            <MdGroups className="card-icon" />
          </div>
          <h1 id="h1-inner">100</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Formateurs</h3>
            <FaChalkboardTeacher className="card-icon" />
          </div>
          <h1 id="h1-inner">30</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Salles</h3>
            <FaSchoolCircleCheck className="card-icon" />
          </div>
          <h1 id="h1-inner">40</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Surveillant</h3>
            <MdSupervisorAccount className="card-icon" />
          </div>
          <h1 id="h1-inner">4</h1>
        </div>
      </div>
      <div className="main-chart">
        <div className="chart">
          <div className="chart-inner">
            <h3>TS</h3>
            <Chart1 />
          </div>
        </div>
        <div className="chart">
          <div className="chart-inner">
            <h3>Emploi</h3>
            <Chart1 />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Accueil;
