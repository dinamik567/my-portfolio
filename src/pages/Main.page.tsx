import { ControlPanel } from "../components/ui/Control.panel";
import { observer } from "mobx-react";
import { rootStore } from "../store/global.store";
import { NavLink } from "react-router";
import { BurgerMenu } from "../components/ui/Burger.menu";

export const MainPage = observer(() => {
  const { activeColor } = rootStore.settingsWebsite;
  return (
    <div className="w-full h-screen relative dark:bg-dark_prime dark:text-white bg-light_prime text-light_text overflow-hidden">
      <div className="flex md:justify-between flex-col md:flex-row-reverse items-center md:items-start gap-20 w-10/12 mx-auto md:mt-44 mt-32">
        <div
          className="relative md:max-w-xs xs:max-w-64 max-w-48 sm:px-7 sm:py-14 py-7 flex justify-center after:absolute after:bottom-[95%] after:right-[95%] bg-black after:w-16 after:h-16 after:border-l-8 after:border-t-8 after:border-[var(--active-theme-color)] before:absolute before:top-[95%] before:left-[95%] before:w-16 before:h-16 before:border-r-8 before:border-b-8 before:border-[var(--active-theme-color)]"
          style={
            {
              "--active-theme-color": activeColor,
            } as React.CSSProperties
          }
        >
          <img className="" src="./images/cat.coder.jpg" alt="cat coder" />
        </div>
        <div className="pt-4 px-4">
          <h1 className="text-xl font-bold mb-6">
            Hello, my name is{" "}
            <span
              className="font-normal text-[var(--my-color)] italic"
              style={{ "--my-color": activeColor } as React.CSSProperties}
            >
              Владислав Ирхин
            </span>
          </h1>
          <h2 className="text-lg font-bold mb-5">
            I`m a{" "}
            <span
              className="text-[var(--my-color)] pl-1 relative px-1 before:absolute before:left-[-1%] before:border-[var(--my-color)] before:border-l-4 before:bg-inherit before:h-full before:w-full before:animate-runline"
              style={{ "--my-color": activeColor } as React.CSSProperties}
            >
              Frontend Developer
            </span>
          </h2>
          <p className="dark:text-slate-300 text-light_text  mb-14">
            I`m a Frontend Developer extensive experience for over 10 years. My
            experience is to create and website design, graphic design, and more
          </p>
          <NavLink
            to="/about"
            className="bg-[var(--my-color)] py-2 px-8 rounded-xl text-white"
            style={{ "--my-color": activeColor } as React.CSSProperties}
          >
            More About me
          </NavLink>
          <p className="mt-28 font-bold text-3xl leading-10">
            <span className="block mb-2">Light & Dark Mode</span>
            <span className="block">Theme Colors</span>
          </p>
        </div>
      </div>
      <ControlPanel />
      <BurgerMenu />
    </div>
  );
});
