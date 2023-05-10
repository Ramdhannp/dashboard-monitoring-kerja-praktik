import "../css/card.css";
import "../css/status.css";

const StatusCard = (props) => {
  return (
    <div className="status" style={{ background: props.color }}>
      <h4 className="keterangan">{props.ket}</h4>
      <div class="break"></div>
      <h1 className="jumlah">{props.jumlah}</h1>
    </div>
  );
};

export default StatusCard;
