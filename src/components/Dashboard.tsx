import HomeIcon from "../assets/icons/home.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ServicesIcon from "../assets/icons/services.svg?react";
import PortfolioIcon from "../assets/icons/portfolio.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import LogoIcon from "../assets/icons/logo.svg?react";

export function Dashboard() {
  return (
    <aside className="w-[13%] bg-[#222222] text-red-700 flex flex-col justify-start items-center pt-12">
      <div className="w-28 h-16 relative mb-[75%] after:absolute after:top-0 after:left-3 after:w-8 after:h-8 after:border-t-4 after:border-l-4 after:border-red-700 before:absolute before:w-8 before:h-8 before:border-b-4 before:border-r-4 before:right-3 before:bottom-0 before:border-red-700">
        <div
          className="h-full flex justify-center items-center
            "
        >
          <LogoIcon fill="white" width={42} height={42} />
        </div>
      </div>
      <nav className="flex flex-col font-medium text-white">
        <a
          className="text-red-700 flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3"
          href="#"
        >
          <HomeIcon width={16} height={16} />
          <span>Home</span>
        </a>
        <a
          className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3"
          href="#"
        >
          <UserIcon width={12} height={12} />
          <span>About</span>
        </a>
        <a
          className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3"
          href="#"
        >
          <ServicesIcon fill="currentColor" width={16} height={16} />
          <span>Service</span>
        </a>
        <a
          className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3"
          href="#"
        >
          <PortfolioIcon fill="currentColor" width={18} height={18} />
          <span>Portfolio</span>
        </a>
        <a
          className="flex justify-around items-center gap-4 px-3 py-1 border-b-[1px] border-slate-600 mb-3"
          href="#"
        >
          <ContactIcon width={16} height={16} />
          <span>Contact</span>
        </a>
      </nav>
    </aside>
  );
}
