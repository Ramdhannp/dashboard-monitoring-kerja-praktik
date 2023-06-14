import React, { useState, useEffect } from "react";
import Cards from "../components/Cards.js";
import Tables from "../components/CardTables.js";
import CardBar from "../components/CardBar";
import CardPie from "../components/CardPie";
import CardLine from "../components/CardLine";
import "../css/dashboard.css";
import TooltipBar from "../components/Tooltip";
import "react-loading-skeleton/dist/skeleton.css";

function Dashboard(props) {
  // URL API
  const salamsUrl = "http://localhost:3006/salams";
  const studentsUrl = "http://localhost:3006/students";
  const surveysUrl = "http://localhost:3006/surveys";
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 7;

  // Fetch data API
  const [salams, setSalams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDataSalams = async () => {
    try {
      let response = await fetch(salamsUrl);
      const salams = await response.json();
      setSalams(salams);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataSalams();
  }, []);

  const [students, setStudents] = useState([]);

  const getDataStudents = async () => {
    try {
      let response = await fetch(studentsUrl);
      const students = await response.json();
      setStudents(students);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataStudents();
  }, []);

  const [surveys, setSurveys] = useState([]);

  const getDataSurveys = async () => {
    try {
      let response = await fetch(surveysUrl);
      const surveys = await response.json();
      setSurveys(surveys);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataSurveys();
  }, []);

  // Delete duplikasi data
  const seen = new Set();
  const dataSatu = salams.filter((el) => {
    const duplicate = seen.has(el.nim);
    seen.add(el.nim);
    return !duplicate;
  });

  let sen = new Set();
  const dataDua = students.filter((el) => {
    const duplicate = sen.has(el.nim);
    sen.add(el.nim);
    return !duplicate;
  });
  sen = new Set();
  const dataTiga = surveys.filter((el) => {
    const duplicate = sen.has(el.nim);
    sen.add(el.nim);
    return !duplicate;
  });

  // Menambah properti angkatan
  dataSatu.forEach((students) => {
    let nim = students.nim;
    nim = nim.slice(1, 3);
    nim = Number.parseInt(nim);
    nim = nim + 2000;
    students.angkatan = nim;
  });

  dataTiga.forEach((srvy) => {
    let nim = srvy.nim;
    nim = nim.slice(1, 3);
    nim = Number.parseInt(nim);
    nim = nim + 2000;
    srvy.angkatan = nim;
  });

  // Menambah status kp dan menghitung tiap angkatan pada tabel salams
  dataSatu.forEach((salam) => {
    if (salam.final_grade === null || salam.final_grade === "Belum") {
      salam.final_grade = "Belum";
      salam.status = "Belum";
    } else if (salam.final_grade !== null && salam.final_grade !== "Belum") {
      salam.status = "Selesai KP";
    }
  });

  // Menambahkan job title pada tabel surveys untuk kebutuhan bar chart
  let jobTitle = [];
  dataTiga.forEach((srvy) => {
    if (srvy.pekerjaan !== null) {
      if (srvy.pekerjaan.toLowerCase().includes("full")) {
        jobTitle[0] = (jobTitle[0] || 0) + 1;
      } else if (srvy.pekerjaan.toLowerCase().includes("back")) {
        jobTitle[1] = (jobTitle[1] || 0) + 1;
      } else if (srvy.pekerjaan.toLowerCase().includes("front")) {
        jobTitle[2] = (jobTitle[2] || 0) + 1;
      } else if (srvy.pekerjaan.toLowerCase().includes("web")) {
        jobTitle[3] = (jobTitle[3] || 0) + 1;
      } else if (srvy.pekerjaan.toLowerCase().includes("data")) {
        jobTitle[4] = (jobTitle[4] || 0) + 1;
      } else if (srvy.pekerjaan.toLowerCase().includes("belum")) {
        // jobTitle[6] = (jobTitle[6] || 0) + 1;
      } else {
        jobTitle[5] = (jobTitle[5] || 0) + 1;
      }
    }
  });

  // Menyamakan value untuk status pada table surveys
  dataTiga.forEach((srvy) => {
    if (srvy.seminar_kp !== null) {
      if (
        srvy.seminar_kp.toLowerCase().includes("sedang") ||
        srvy.seminar_kp.toLowerCase().includes("ya")
      ) {
        srvy.selesai_kp = "Ya";
      }
    } else if (srvy.tahap_pelaksanaan_kp !== null) {
      if (srvy.tahap_pelaksanaan_kp.toLowerCase().includes("sedang")) {
        srvy.tahap_pelaksanaan_kp = "Ya";
      }
    } else if (srvy.tahap_pendaftaran_kp !== null) {
      if (
        srvy.tahap_pendaftaran_kp === "Ya" ||
        srvy.tahap_pendaftaran_kp.toLowerCase().includes("sedang")
      ) {
        srvy.tahap_pendaftaran_kp = "Ya";
      }
    }
  });

  // Jika data terbaru ditambahkan di baris terakhir maka perlu dilakukan reverse
  // Reverse data Surveys
  // const reverseDataTiga = dataTiga
  //   .slice(0)
  //   .reverse()
  //   .map((element) => {
  //     return element;
  //   });

  // Menggabungkan ketiga tabel
  let tigaData = [...dataTiga, ...dataSatu, ...dataDua];

  // Delete duplikasi data
  const look = new Set();
  const dataGabungan = tigaData.filter((el) => {
    const duplicate = look.has(el.nim);
    look.add(el.nim);
    return !duplicate;
  });

  // Menyamakan nama properti setelah digabungin
  dataGabungan.forEach((data) => {
    if (data["student_year"]) {
      let nim = data["student_year"];
      nim = Number.parseInt(nim);
      data.angkatan = nim;
      delete data["student_year"];
    }
    if (!data["final_grade"]) {
      //jika tidak ada kolom final_grade maka tambahkan
      data.final_grade = "Belum";
    }
    if (data.nama) {
      data.full_name = data.nama;
      delete data.nama;
    }
  });

  // sorting data
  dataGabungan.sort((a, b) => parseFloat(a.nim) - parseFloat(b.nim));

  // menghapus angkatan 7 tahun kebelakang & menghapus nim yang tidak valid
  const dataTabel = dataGabungan.filter(
    (data) =>
      ((data.angkatan <= currentYear && data.angkatan >= lastYear) ||
        (data.angkatan <= currentYear.toString &&
          data.angkatan >= lastYear.toString)) &&
      data["nim"].length === 10 &&
      !isNaN(data.nim)
  );

  let allBelumKp = 0;
  let allTahapPendaftaran = 0;
  let allSedangKp = 0;
  let allSelesaiKp = 0;
  let allSelesaiSeminar = 0;
  let selesaiKP = {};
  let belumKP = {};
  let tahadPendaftaranKP = {};
  let sedangKP = {};
  let selesaiSeminar = {};
  let jumlahMhsAngkatan = {};

  dataTabel.forEach((data, i) => {
    data.id = i + 1;

    jumlahMhsAngkatan[data.angkatan] =
      (jumlahMhsAngkatan[data.angkatan] || 0) + 1;

    // Menambahkan Status

    // Selesai Seminar
    if (data.seminar_kp === "Ya") {
      data.status = <TooltipBar status="Selesai Seminar" />;
      data.hide = "Selesai Seminar";
      // Menghitung semua mahasiswa yang selesai KP
      allSelesaiSeminar++;
      // Menghitung mahasiswa yang belum KP setiap angkatan
      selesaiSeminar[data.angkatan] = (selesaiSeminar[data.angkatan] || 0) + 1;
      selesaiKP[data.angkatan] = (selesaiKP[data.angkatan] || 0) + 1;
    } else if (
      (data.final_grade !== null && data.final_grade !== "Belum") ||
      data.selesai_kp === "Ya"
    ) {
      data.status = <TooltipBar status="Selesai KP" />;
      data.hide = "Selesai KP";
      // Menghitung semua mahasiswa yang selesai KP
      allSelesaiKp++;
      // Menghitung mahasiswa yang selesai KP tiap angkatan
      selesaiKP[data.angkatan] = (selesaiKP[data.angkatan] || 0) + 1;
    } else if (data.tahap_pelaksanaan_kp === "Ya") {
      // Tahap Pelaksanaan KP
      data.status = <TooltipBar status="Sedang KP" />;
      data.hide = "Sedang KP";
      // Menghitung semua mahasiswa yang selesai KP
      allSedangKp++;
      // Menghitung mahasiswa yang belum KP setiap angkatan
      sedangKP[data.angkatan] = (sedangKP[data.angkatan] || 0) + 1;
    } else if (data.tahap_pendaftaran_kp === "Ya") {
      data.status = <TooltipBar status="Pendaftaran KP" />;
      data.hide = "Pendaftaran KP";
      // Menghitung semua mahasiswa yang selesai KP
      allTahapPendaftaran++;
      // Menghitung mahasiswa yang belum KP setiap angkatan
      tahadPendaftaranKP[data.angkatan] =
        (tahadPendaftaranKP[data.angkatan] || 0) + 1;
      belumKP[data.angkatan] = (belumKP[data.angkatan] || 0) + 1;
    } else if (data.final_grade === "Belum") {
      data.status = <TooltipBar status="Belum" />;
      data.hide = "Belum";
      //menghtung semua mahasiswa yang belum KP
      allBelumKp++;
      // Menghitung mahasiswa yang belum KP setiap angkatan
      belumKP[data.angkatan] = (belumKP[data.angkatan] || 0) + 1;
    } else if (data.tahap_pelaksanaan_kp === null) {
      sedangKP[data.angkatan] = 0;
    }
    sedangKP[data.angkatan] = (sedangKP[data.angkatan] || 0) + 0;
    belumKP[data.angkatan] = (belumKP[data.angkatan] || 0) + 0;
    selesaiKP[data.angkatan] = (selesaiKP[data.angkatan] || 0) + 0;
  });

  let jumlahMhs =
    allSelesaiKp +
    allBelumKp +
    allSelesaiSeminar +
    allSedangKp +
    allTahapPendaftaran;

  return (
    <div>
      <p
        className="second-title"
        style={{ fontWeight: 400, color: "#95A0AF", marginLeft: "10px" }}
      >
        Status KP Mahasiswa
      </p>
      <div className="row">
        <div className="kartu col-12 col-lg-8">
          <Cards
            title="Total Mahasiswa"
            jumlahMhs={jumlahMhs}
            jumlahMhsAngkatan={jumlahMhsAngkatan}
            allSelesaiKp={allSelesaiKp}
            allBelumKp={allBelumKp}
            allSedangKp={allSedangKp}
            allSelesaiSeminar={allSelesaiSeminar}
            allTahapPendaftaran={allTahapPendaftaran}
            isLoading={isLoading}
          />
        </div>
        <div className="kartu col-12 col-lg-4">
          <CardPie
            allBelumKp={allBelumKp}
            allSelesaiKp={allSelesaiKp}
            selesaiKP={selesaiKP}
            belumKP={belumKP}
          />
        </div>
        <div className="kartu col-lg-8 col-md-12 col-sm-12">
          <CardLine
            selesaiKP={selesaiKP}
            belumKP={belumKP}
            sedangKP={sedangKP}
            isLoading={isLoading}
          />
        </div>
        <div className="kartu col-lg-4 col-md-12 col-sm-12">
          <CardBar jobTitle={jobTitle} />
        </div>
      </div>
      <div className="row">
        <div className="kartu col-lg-12">
          <Tables dataTable={dataTabel} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
