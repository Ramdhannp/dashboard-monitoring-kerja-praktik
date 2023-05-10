import ReactApexChart from "react-apexcharts";
import React from "react";

function LineChart(props) {
  let kategori = Object.keys(props.selesaiKP);

  const series = [
    {
      name: "Mahasiswa",
      data: Object.values(props.selesaiKP),
    },
  ];
  const options = {
    chart: {
      id: "chart2",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#A8C5DA"],
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     opacityFrom: 0.4,
    //     opacityTo: 0.1,
    //   },
    // },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Mahasiswa yang Sudah KP",
    //   style: {
    //     fontSize: 16,
    //     fontFamily: "Poppins",
    //     color: "var(--dark-color)",
    //     fontWeight: 500,
    //   },
    // },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: kategori,
    },
  };
  return (
    <ReactApexChart
      options={options}
      type="line"
      series={series}
      height={350}
    />
  );
}

export default LineChart;
