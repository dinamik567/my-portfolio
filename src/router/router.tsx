import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/MainPage";
import { Dashboard } from "../components/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <div className="w-full flex">
        <Dashboard />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/about" index element={<div>About</div>} />
          <Route path="/service" index element={<div>Service</div>} />
          <Route path="/portfolio" index element={<div>Portfolio</div>} />
          <Route path="/contact" index element={<div>Contact</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
