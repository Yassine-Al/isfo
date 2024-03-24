import React from "react";
import AffichageTb from "./Affichage-tb";

function Ts() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>TABLEAU DE SERVICE</h3>
      </div>
      <section className="Ts-sec1">
        <div className="groups-elements">
          <div>
            <h1 className="ts-h1">Groups</h1>
          </div>
          <div className="ts-btns">
            <button className="tsbtn-add">
              <i class="fa-solid fa-plus"></i>
            </button>
            <button className="tsbtn-delat">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button className="tsbtn-ref">
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
            <select
              size="18"
              class="form-select"
              style={{
                height: "370px",
                padding: "0px",
                background: "transparent",
                width: "240px",
                marginTop: "6px",
                border: "none",
                color:"white"
              }}
            >
            </select>
          </div>
        </div>
        <div className="affich-elements">
          <AffichageTb />
        </div>
        <div className="formateur-elements">
          <div>
            <h1 className="ts-h1">Formateurs</h1>
          </div>
          <div className="ts-btns">
            <button className="tsbtn-affecter">Affecter</button>
            <button className="tsbtn-add">
              <i class="fa-solid fa-plus"></i>
            </button>
            <button className="tsbtn-delat">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <select
              size="18"
              class="form-select"
              style={{
                height: "370px",
                padding: "0px",
                background: "transparent",
                width: "240px",
                marginTop: "6px",
                border: "none",
                color:"white",
              }}
            >
            </select>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ts;
