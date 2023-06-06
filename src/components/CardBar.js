import BarChart from "./BarCharts";
import "../css/card.css";

const CardBar = (props) => {
  return (
    <div className="cards">
      <p className="d-none">cardbar</p>
      <BarChart jobTitle={props.jobTitle} />
    </div>
  );
};

export default CardBar;
