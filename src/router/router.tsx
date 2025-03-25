import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/Main.page";
import { Dashboard } from "../components/Dashboard";
import { rootStore } from "../store/global.store";
import { observer } from "mobx-react";
import { AboutMe } from "../pages/About.me";

export const Router = observer(() => {
  const { darkMode } = rootStore.themeColors;

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"} flex items-stretch`}>
        <Dashboard />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/about" index element={<AboutMe />} />
          <Route path="/service" index element={<div>Service</div>} />
          <Route path="/portfolio" index element={<div>Portfolio</div>} />
          <Route path="/contact" index element={<div>Contact</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});
