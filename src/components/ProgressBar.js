import React from "react";
import "../css/progress-bar.css";

function ProgressBar(props) {
  let step = props.step;
  const centang = (
    <svg
      width="1.5rem"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path>
    </svg>
  );

  let completed = [];
  let progress = [];
  let satu, dua, tiga, empat, lima;
  switch (step) {
    case 1:
      satu = 1;
      dua = 2;
      tiga = 3;
      empat = 4;
      lima = 5;
      progress[0] = true;
      break;
    case 2:
      satu = centang;
      dua = 2;
      tiga = 3;
      empat = 4;
      lima = 5;

      completed[0] = true;
      progress[1] = true;
      break;
    case 3:
      satu = centang;
      dua = centang;
      tiga = 3;
      empat = 4;
      lima = 5;

      completed[0] = true;
      completed[1] = true;
      progress[2] = true;
      break;
    case 4:
      satu = centang;
      dua = centang;
      tiga = centang;
      empat = centang;
      lima = 5;

      completed[0] = true;
      completed[1] = true;
      completed[2] = true;
      completed[3] = true;
      progress[4] = true;
      break;
    case 5:
      satu = centang;
      dua = centang;
      tiga = centang;
      empat = centang;
      lima = centang;
      completed[0] = true;
      completed[1] = true;
      completed[2] = true;
      completed[3] = true;
      completed[4] = true;
      break;
    default:
      satu = 1;
      dua = 2;
      tiga = 3;
      empat = 4;
      lima = 5;
  }

  return (
    <div className="stepper-wrapper">
      <div className={`stepper-item ${completed[0] === true && "completed"}`}>
        <div className={`step-counter ${progress[0] === true && "progress"}`}>
          {satu}
        </div>
        <div className="step-name">Belum</div>
      </div>
      <div className={`stepper-item ${completed[1] === true && "completed"}`}>
        <div className={`step-counter ${progress[1] === true && "progress"}`}>
          {dua}
        </div>
        <div className="step-name">Pendaftaran</div>
      </div>
      <div className={`stepper-item ${completed[2] === true && "completed"}`}>
        <div className={`step-counter ${progress[2] === true && "progress"}`}>
          {tiga}
        </div>
        <div className="step-name text-center">Sedang KP</div>
      </div>
      <div className={`stepper-item ${completed[3] === true && "completed"}`}>
        <div className={`step-counter ${progress[3] === true && "progress"}`}>
          {empat}
        </div>
        <div className="step-name text-center">Selesai KP</div>
      </div>
      <div className={`stepper-item ${completed[4] === true && "completed"}`}>
        <div className={`step-counter ${progress[4] === true && "progress"}`}>
          {lima}
        </div>
        <div className="step-name text-center">Seminar</div>
      </div>
    </div>
  );
}

export default ProgressBar;
