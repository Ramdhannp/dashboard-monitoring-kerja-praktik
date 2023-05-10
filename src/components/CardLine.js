import LineChart from "./LineCharts";
import { StackedChart } from "./StackedChart";
import React from "react";
import "../css/card.css";

const CardLine = (props) => {
  const [status, setStatus] = React.useState(2);

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div className="cards">
      <div className="header d-flex align-items-center mb-3">
        <h6 className="mx-2">Status KP</h6>
        <h6>|</h6>
        <label className="radioBtn">
          <input
            type="radio"
            name="release"
            className="radioButton"
            checked="checked"
            onClick={(e) => radioHandler(2)}
            onChange={() => {}}
          />
          <span className={`checkmark ${status === 2 ? "text-bold" : ""}`}>
            Line
          </span>
        </label>
        <label className="radioBtn">
          <input
            type="radio"
            name="release"
            className="radioButton"
            onClick={(e) => radioHandler(1)}
            onChange={() => {}}
          />
          <span className={`checkmark ${status === 1 ? "text-bold" : ""}`}>
            Stacked
          </span>
        </label>
      </div>
      {status === 1 ? (
        <StackedChart
          selesaiKP={props.selesaiKP}
          belumKP={props.belumKP}
          sedangKP={props.sedangKP}
        />
      ) : (
        <LineChart selesaiKP={props.selesaiKP} />
      )}
    </div>
  );
};

export default CardLine;
