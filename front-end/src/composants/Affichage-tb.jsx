import React from "react";

export default function AffichageTb() {
  return (
    <div>
      <table
        style={{
          padding: "10px",
          backgroundColor: "#346495",
          marginTop: "-9px",
        }}
      >
        <thead>
          <tr>
            <th>
              <select id="select-group">
                <option value="">Groups</option>
              </select>
            </th>
            <th>
              <input type="text" placeholder="N°" id="inp-N" />
            </th>
            <th>
              <select id="select-Module">
                <option value="">Module</option>
              </select>
            </th>
            <th>
              <select id="select-filter">
                <option value="">Tous</option>
              </select>
            </th>
            <th>
              <input type="text" placeholder="Metier" id="inp-Metier" />
            </th>
            <th>
              <i class="fa-solid fa-filter" id="i-filter"></i>
            </th>
          </tr>
        </thead>
      </table>
      <hr />
      <table
        style={{
          padding: "10px",
          backgroundColor: "#346495",
        }}
      >
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th style={{ width: "100px" }} id="inp-N">
              {" "}
              Groupe{" "}
            </th>
            <th style={{ width: "80px" }} id="inp-N">
              {" "}
              N°{" "}
            </th>
            <th style={{ width: "" }} id="inp-N">
              {" "}
              Module{" "}
            </th>
            <th style={{ width: "60px" }} id="inp-N">
              {" "}
              MHPres{" "}
            </th>
            <th style={{ width: "60px" }} id="inp-N">
              {" "}
              MHFAD{" "}
            </th>
            <th style={{ width: "60px" }} id="inp-N">
              {" "}
              Total{" "}
            </th>
            <th style={{ width: "150px" }} id="inp-N">
              {" "}
              Formateur{" "}
            </th>
            <th style={{ width: "20px" }} id="inp-N">
              {" "}
              Fusion{" "}
            </th>
            <th style={{ width: "120px" }} id="inp-N">
              <button
                style={{
                  padding: "5px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <i
                  class="fa-solid fa-file-pen"
                  style={{
                    color: "#fff",
                    fontSize: "19px",
                    fontWeight: "bold",
                  }}
                ></i>
              </button>
            </th>
            <th style={{ width: "100px" }}>
              <button
                style={{
                  padding: "5px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <i
                  class="fa-solid fa-file-arrow-down"
                  style={{
                    color: "#fff",
                    fontSize: "19px",
                    fontWeight: "bold",
                  }}
                ></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>TDD103</td>
            <td>1111</td>
            <td>Algorithme</td>
            <td>N122</td>
            <td>M122</td>
            <td>100h</td>
            <td>M-Fathellah</td>
            <td colSpan={3}>fbr233</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
