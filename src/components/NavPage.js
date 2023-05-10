import React from "react";
import Dashboard from "../pages/Dashboard";
import Lainnya from "../pages/Lainnya";
import { Route, Routes } from "react-router-dom";

export const NavPage = () => {
  return (
    <div className="section main-section">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Lainnya" element={<Lainnya />}></Route>
      </Routes>
    </div>
  );
};
