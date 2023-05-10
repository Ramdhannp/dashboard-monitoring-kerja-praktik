import BarChart from "./BarCharts";
import "../css/card.css";

const CardBar = (props) => {
  return (
    <div className="cards">
      <BarChart jobTitle={props.jobTitle} />
    </div>
  );
};

export default CardBar;
