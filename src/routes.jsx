import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import App from "./App";
import ComingSoonPage from "./container/coming-soon";
const ApplicationRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<App />} />
            <Route path="service" element={<ComingSoonPage />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRoutes;
