import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaHome, FaTable, FaChalkboardTeacher } from "react-icons/fa";
import { GrTableAdd } from "react-icons/gr";
import { FaRegCalendarCheck, FaSchoolCircleCheck } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

export default function Saidbar() {
  return (
    <aside id="asidbar">
      <div className="brand">
        <div id="brand-logo">
          <img src={logo} alt="" id="logo" />
        </div>
        <h1 className="h1-brand">ISFO</h1>
      </div>
      <div className="aside-list">
        <div className="menu">
          <ul class="menu-content">
            <li id="li-nv">
              <Link id="nv-link" to="/">
                <span id="i-ts">
                  <FaHome />
                </span>
                <span>Accueil</span>
              </Link>
            </li>
            {/* <li id="li-nv">
              <Link id="nv-link" to="/Ts">
                <span id="i-ts">
                  <FaTable />
                </span>
                <span>Tableau de service</span>
              </Link>
            </li> */}

            {/* <li id="li-nv">
              <Link id="nv-link" to="/Emploi">
                <span id="i-ts">
                  <GrTableAdd />
                </span>
                <span>Créer nouveaus emplois</span>
              </Link>
            </li> */}

            {/* <li id="li-nv">
              <Link id="nv-link" to="/amp">
                <span id="i-ts">
                  <FaRegCalendarCheck />
                </span>
                <span>Afficher Emplois</span>
              </Link>
            </li> */}
            <li id="li-nv">
              <Link id="nv-link" to="/Groups">
                <span id="i-ts">
                  <MdGroups />
                </span>
                <span>Groups</span>
              </Link>
            </li>
            <li id="li-nv">
              <Link id="nv-link" to="/Liste_Formateur">
                <span id="i-ts">
                  <FaChalkboardTeacher />
                </span>
                <span>Formateurs</span>
              </Link>
            </li>
            <li id="li-nv">
              <Link id="nv-link" to="/addElement">
                <span id="i-ts">
                  <FaChalkboardTeacher />
                </span>
                <span>Microservice</span>
              </Link>
            </li>
            {/* <li id="li-nv">
              <Link id="nv-link" to="/osl">
                <span id="i-ts">
                  <FaSchoolCircleCheck />
                </span>
                <span>Occupation des salles</span>
              </Link>
            </li> */}
            <li id="logout">
              <Link id="nv-link" to="/">
                <span id="i-ts">
                  <TbLogout />
                </span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
