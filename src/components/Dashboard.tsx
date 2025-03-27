import HomeIcon from "../assets/icons/home.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import PortfolioIcon from "../assets/icons/portfolio.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import LogoIcon from "../assets/icons/logo.svg?react";

import { observer } from "mobx-react";
import { rootStore } from "../store/global.store";
import { NavLink } from "react-router";
import { useEffect, useRef } from "react";

export const Dashboard = observer(() => {
  const navBarElem = useRef<HTMLElement | null>(null);
  const { activeColor, isOpenNavBar, closeNavBar } = rootStore.settingsWebsite;

  const handleClickCloseNavBar = () => closeNavBar();

  useEffect(() => {
    if (!navBarElem.current) return;

    const handleClickDocument = (e: MouseEvent) => {
      if (!navBarElem.current?.contains(e.target as Node) && isOpenNavBar) {
        closeNavBar();
      }
    };

    document.addEventListener("click", handleClickDocument);

    return () => document.removeEventListener("click", handleClickDocument);
  });

  return (
    <aside
      ref={navBarElem}
      className={`${
        isOpenNavBar ? "translate-x-0" : "-translate-x-[100%]"
      } lg:translate-x-0 lg:w-fit lg:relative absolute z-10 px-10 lg:px-4 min-h-screen dark:bg-[#222222] bg-[#fdfbff] text-light_text dark:text-white lg:flex flex-col justify-start items-center duration-500 ease-in-out`}
    >
      <div
        className="w-28 h-16 relative mb-[75%] mt-12 after:absolute after:top-0 after:left-3 after:w-8 after:h-8 after:border-t-4 after:border-l-4 after:border-[var(--my-color)] before:absolute before:w-8 before:h-8 before:border-b-4 before:border-r-4 before:right-3 before:bottom-0 before:border-[var(--my-color)]"
        style={{ "--my-color": activeColor } as React.CSSProperties}
      >
        <div className="h-full flex justify-center items-center ">
          <LogoIcon fill="currentColor" width={42} height={42} />
        </div>
      </div>
      <nav className="flex flex-col font-medium dark:text-white text-light_text">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="/"
        >
          <div className="flex justify-start items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <HomeIcon width={16} height={16} />
            <span>Главная</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="/about"
        >
          <div className="flex justify-start items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <UserIcon width={16} height={16} />
            <span>Обо мне</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="portfolio"
        >
          <div
            className="flex justify-start items-center gap-4 px-3 py-1
          border-b-[1px] border-slate-600 mb-3"
          >
            <PortfolioIcon fill="currentColor" width={16} height={16} />
            <span>Портфолио</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="contact"
        >
          <div className="flex justify-start items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <ContactIcon width={16} height={16} />
            <span>Контакты</span>
          </div>
        </NavLink>
      </nav>
      <button
        onClick={handleClickCloseNavBar}
        className="absolute lg:hidden top-4 right-4 w-8 h-8 rounded-full dark:bg-neutral-900 bg-gray-300 dark:text-slate-200 flex justify-center items-center"
      >
        <div className="w-5 h-5 relative">
          <span className="w-full h-[2px] absolute left-0 top-1/2 -translate-y-1/2 bg-light_text dark:bg-slate-200 rounded-lg rotate-45" />
          <span className="w-full h-[2px] absolute right-0 top-1/2 -translate-y-1/2 bg-light_text dark:bg-slate-200 rounded-lg -rotate-45" />
        </div>
      </button>
    </aside>
  );
});
