import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ProgressBar from "./ProgressBar";
import "../css/tooltip.css";

function TooltipBar(props) {
  let step;
  let colorBadge;
  switch (props.status) {
    case "Belum":
      step = 1;
      colorBadge = "belum";
      break;
    case "Pendaftaran KP":
      step = 2;
      colorBadge = "pendaftaran";
      break;
    case "Sedang KP":
      step = 3;
      colorBadge = "sedang";
      break;
    case "Selesai KP":
      step = 4;
      colorBadge = "selesaiKp";
      break;
    case "Selesai Seminar":
      colorBadge = "selesai";
      step = 5;
      break;
    default:
  }
  return (
    <>
      <OverlayTrigger
        overlay={
          <Popover id="popover-contained" style={{ margin: 0, padding: 0 }}>
            <Popover.Body>
              <ProgressBar step={step} />
            </Popover.Body>
          </Popover>
        }
      >
        <Badge pill className={colorBadge}>
          {props.status}
        </Badge>
      </OverlayTrigger>
    </>
  );
}

export default TooltipBar;
