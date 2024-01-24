import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Service from "./dashboard/Service";
const ApplicationRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="service" element={<Service />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRoutes;
