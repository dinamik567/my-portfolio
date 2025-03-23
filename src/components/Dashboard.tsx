import HomeIcon from "../assets/icons/home.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ServicesIcon from "../assets/icons/services.svg?react";
import PortfolioIcon from "../assets/icons/portfolio.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import LogoIcon from "../assets/icons/logo.svg?react";

import { observer } from "mobx-react";
import { rootStore } from "../store/global.store";
import { NavLink } from "react-router";

export const Dashboard = observer(() => {
  const { activeColor } = rootStore.themeColors;

  return (
    <aside className="w-[13%] h-screen bg-[#222222] text-red-700 flex flex-col justify-start items-center pt-12">
      <div
        className="w-28 h-16 relative mb-[75%] after:absolute after:top-0 after:left-3 after:w-8 after:h-8 after:border-t-4 after:border-l-4 after:border-[var(--my-color)] before:absolute before:w-8 before:h-8 before:border-b-4 before:border-r-4 before:right-3 before:bottom-0 before:border-[var(--my-color)]"
        style={{ "--my-color": activeColor } as React.CSSProperties}
      >
        <div className="h-full flex justify-center items-center">
          <LogoIcon fill="white" width={42} height={42} />
        </div>
      </div>
      <nav className="flex flex-col font-medium text-white">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="/"
        >
          <div className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <HomeIcon width={16} height={16} />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="/about"
        >
          <div className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <UserIcon width={12} height={12} />
            <span>About</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="service"
        >
          <div className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <ServicesIcon fill="currentColor" width={16} height={16} />
            <span>Service</span>
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
            className="flex justify-around items-center gap-4 px-3 py-1
          border-b-[1px] border-slate-600 mb-3"
          >
            <PortfolioIcon fill="currentColor" width={18} height={18} />
            <span>Portfolio</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[var(--my-color)]" : ""
          }
          style={{ "--my-color": activeColor } as React.CSSProperties}
          to="contact"
        >
          <div className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3">
            <ContactIcon width={16} height={16} />
            <span>Contact</span>
          </div>
        </NavLink>
      </nav>
    </aside>
  );
});
