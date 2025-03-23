import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/MainPage";
import { Dashboard } from "../components/Dashboard";
import { rootStore } from "../store/global.store";
import { observer } from "mobx-react";

export const Router = observer(() => {
  const { darkMode } = rootStore.themeColors;

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"} w-full flex`}>
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
});
