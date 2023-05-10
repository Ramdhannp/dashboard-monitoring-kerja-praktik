import ReactApexChart from "react-apexcharts";

function PieChart(props) {
  const series = props.dataKp;

  const options = {
    chart: {
      type: "pie",
      foreColor: "var(--dark-color)",
    },
    labels: ["Belum", "Selesai KP"],
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -18,
        },
      },
    },
    responsive: [
      {
        breakpoint: 300,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
          markers: {
            strokeWidth: 2,
          },
        },
      },
    ],
    dataLabels: {
      style: {
        fontSize: 12,
        colors: ["var(--dark-color)"],
        fontWeight: 550,
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      position: "right",
      fontSize: 12,
      itemMargin: {
        horizontal: 12,
        vertical: 1,
      },
    },
    tooltip: {
      enabled: true,
      offsetY: 0,
      theme: "light",
      style: {
        fontSize: "12px",
        color: "var(--dark-color)",
      },
    },
    stroke: { width: 0 },

    colors: ["var(--card-status-color2)", "#B1E3FF"],
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" width={350} />
  );
}

export default PieChart;
