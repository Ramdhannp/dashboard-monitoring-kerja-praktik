// import React, { useState } from "react";
import Cards from "../components/Cards.js";
import Tables from "../components/CardTables.js";
import CardBar from "../components/CardBar";
import CardPie from "../components/CardPie";
import CardLine from "../components/CardLine";
import "../css/dashboard.css";
import "react-loading-skeleton/dist/skeleton.css";
import { mahasiswa } from "../Data/Mahasiswa.js";

function Dashboard(props) {
	// const [isLoading, setIsLoading] = useState(false);

	let jobTitle = [];
	let jumlahMhsAngkatan = {};
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

	mahasiswa.data.forEach((data) => {
		if (data.pekerjaan !== null) {
			if (data.pekerjaan.toLowerCase().includes("full")) {
				jobTitle[0] = (jobTitle[0] || 0) + 1;
			} else if (data.pekerjaan.toLowerCase().includes("back")) {
				jobTitle[1] = (jobTitle[1] || 0) + 1;
			} else if (data.pekerjaan.toLowerCase().includes("front")) {
				jobTitle[2] = (jobTitle[2] || 0) + 1;
			} else if (data.pekerjaan.toLowerCase().includes("web")) {
				jobTitle[3] = (jobTitle[3] || 0) + 1;
			} else if (data.pekerjaan.toLowerCase().includes("data")) {
				jobTitle[4] = (jobTitle[4] || 0) + 1;
			} else {
				jobTitle[5] = (jobTitle[5] || 0) + 1;
			}
		}
		jumlahMhsAngkatan[data.angkatan] =
			(jumlahMhsAngkatan[data.angkatan] || 0) + 1;

		if (data.status === "Selesai Seminar") {
			allSelesaiSeminar++;
			selesaiSeminar[data.angkatan] = (selesaiSeminar[data.angkatan] || 0) + 1;
			selesaiKP[data.angkatan] = (selesaiKP[data.angkatan] || 0) + 1;
		} else if (data.status === "Selesai KP") {
			allSelesaiKp++;
			selesaiKP[data.angkatan] = (selesaiKP[data.angkatan] || 0) + 1;
		} else if (data.status === "Sedang KP") {
			allSedangKp++;
			sedangKP[data.angkatan] = (sedangKP[data.angkatan] || 0) + 1;
		} else if (data.status === "Pendaftaran KP") {
			allTahapPendaftaran++;
			tahadPendaftaranKP[data.angkatan] =
				(tahadPendaftaranKP[data.angkatan] || 0) + 1;
		} else {
			allBelumKp++;
			belumKP[data.angkatan] = (belumKP[data.angkatan] || 0) + 1;
		}
	});

	console.log(mahasiswa.data);
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
						jumlahMhs={mahasiswa.data.length}
						jumlahMhsAngkatan={jumlahMhsAngkatan}
						allSelesaiKp={allSelesaiKp}
						allBelumKp={allBelumKp}
						allSedangKp={allSedangKp}
						allSelesaiSeminar={allSelesaiSeminar}
						allTahapPendaftaran={allTahapPendaftaran}
						isLoading={true}
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
						isLoading={true}
					/>
				</div>
				<div className="kartu col-lg-4 col-md-12 col-sm-12">
					<CardBar jobTitle={jobTitle} />
				</div>
			</div>
			<div className="row">
				<div className="kartu col-lg-12">
					<Tables dataTable={mahasiswa.data} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
