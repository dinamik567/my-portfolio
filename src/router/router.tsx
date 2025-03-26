import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/Main.page";
import { Dashboard } from "../components/Dashboard";
import { rootStore } from "../store/global.store";
import { observer } from "mobx-react";
import { AboutMePage } from "../pages/About.me.page";
import { ContactPage } from "../pages/Contact.page";
import { PortfolioPage } from "../pages/Portfolio.page";

export const Router = observer(() => {
  const { darkMode } = rootStore.themeColors;

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"} flex items-stretch`}>
        <Dashboard />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/about" element={<AboutMePage />} />
          {/* <Route path="/blog" element={<div>Blog</div>} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});
