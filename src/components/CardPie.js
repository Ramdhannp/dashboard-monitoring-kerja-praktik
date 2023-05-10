import PieChart from "./PieCharts";
import "../css/card.css";
import React, { useState } from "react";

const CardPie = (props) => {
  let allBelumKp = props.allBelumKp;
  let allSelesaiKp = props.allSelesaiKp;
  const allKp = [allBelumKp, allSelesaiKp];
  let dataKp;
  let angkatan = Object.keys(props.selesaiKP);
  const [selectedAngkatan, setSelectedAngkatan] = useState("all");

  if (selectedAngkatan === "all") {
    dataKp = allKp;
  } else {
    if (props.belumKP[selectedAngkatan] === undefined) {
      props.belumKP[selectedAngkatan] = 0;
    }
    if (props.selesaiKP[selectedAngkatan] === undefined) {
      props.selesaiKP[selectedAngkatan] = 0;
    }
    dataKp = [
      props.belumKP[selectedAngkatan],
      props.selesaiKP[selectedAngkatan],
    ];
  }
  return (
    <div className="cards ">
      <div className="header d-flex align-items-center mb-3">
        <h6 className="mx-2">Status KP Tiap Angkatan </h6>
        <select
          class="form-select form-select-sm ms-2"
          value={selectedAngkatan}
          onChange={(e) => setSelectedAngkatan(e.target.value)}
          style={{ width: "auto" }}
        >
          <option value="all">All</option>
          {angkatan.map((a, key) => (
            <option key={key} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <PieChart dataKp={dataKp} />
      </div>
    </div>
  );
};

export default CardPie;
