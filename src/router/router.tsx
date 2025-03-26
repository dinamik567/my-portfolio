import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/Main.page";
import { Dashboard } from "../components/Dashboard";
import { rootStore } from "../store/global.store";
import { observer } from "mobx-react";
import { AboutMePage } from "../pages/About.me.page";
import { ContactPage } from "../pages/Contact.page";

export const Router = observer(() => {
  const { darkMode } = rootStore.themeColors;

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"} flex items-stretch`}>
        <Dashboard />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/about" index element={<AboutMePage />} />
          <Route path="/service" index element={<div>Service</div>} />
          <Route path="/portfolio" index element={<div>Portfolio</div>} />
          <Route path="/contact" index element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});
