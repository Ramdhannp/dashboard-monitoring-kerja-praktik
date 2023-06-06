import ReactApexChart from "react-apexcharts";

function BarChart(props) {
  const jumlah = [
    {
      name: "Jumlah",
      data: props.jobTitle,
    },
  ];
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: "30%",
        horizontal: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Job Title Trends",
      align: "left",
      style: {
        fontSize: 16,
        fontFamily: "Poppins",
        color: "var(--dark-color)",
        fontWeight: 500,
      },
    },
    xaxis: {
      labels: {
        trim: true,
        style: {
          fontSize: 10,
        },
      },
      categories: [
        "Full Stack",
        "Backend",
        "Frontend",
        "Web Dev",
        "Data Engineer",
        "Other",
      ],
    },

    colors: ["#BAEDBD", "#C6C7F8", "#C7C8CA", "#B1E3FF", "#95A4FC", "#A1E3CB"],
    legend: {
      show: false,
    },
  };
  return (
    <ReactApexChart options={options} series={jumlah} type="bar" height={395} />
  );
}

export default BarChart;
