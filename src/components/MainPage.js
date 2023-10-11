import React from "react";
import Sidebar from "./Sidebar";
import { NavPage } from "./NavPage";

export const MainPage = () => {
	return (
		<div className="main-page">
			<Sidebar />
			<NavPage />
		</div>
	);
};
