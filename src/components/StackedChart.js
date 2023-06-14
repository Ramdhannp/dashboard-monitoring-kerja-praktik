import React from "react";
import ReactApexChart from "react-apexcharts";

export const StackedChart = (props) => {
  let tahun = [
    ...Object.keys(props.selesaiKP),
    ...Object.keys(props.belumKP),
    ...Object.keys(props.sedangKP),
  ];

  const look = new Set();
  const angkatan = tahun.filter((el) => {
    const duplicate = look.has(el);
    look.add(el);
    return !duplicate;
  });

  // sorting data
  angkatan.sort((a, b) => parseFloat(a) - parseFloat(b));

  const series = [
    {
      name: "Belum",
      data: Object.values(props.belumKP),
    },
    {
      name: "Sedang KP",
      data: Object.values(props.sedangKP),
    },
    {
      name: "Selesai KP",
      data: Object.values(props.selesaiKP),
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: "25%",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 700,
            },
          },
        },
      },
    },
    xaxis: {
      categories: angkatan,
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
    colors: ["#B1E3FF", "#95A4FC", "#A1E3CB"],
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};
