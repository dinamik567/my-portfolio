import { ControlPanel } from "../components/ui/Control.panel";
import { observer } from "mobx-react";
import { rootStore } from "../store/global.store";

export const MainPage = observer(() => {
  const { activeColor } = rootStore.themeColors;
  return (
    <div className="w-[87%] h-screen relative dark:bg-dark_prime dark:text-white bg-light_prime text-light_text overflow-hidden">
      <div className="flex justify-between items-start gap-20 w-10/12 mx-auto mt-44">
        <div className="pt-4 px-4">
          <h1 className="text-xl font-bold mb-6">
            Hello, my name is{" "}
            <span
              className="font-normal text-[var(--my-color)] italic"
              style={{ "--my-color": activeColor } as React.CSSProperties}
            >
              Vladislav Irhin
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
          <button
            className="bg-[var(--my-color)] py-2 px-8 rounded-xl text-white"
            style={{ "--my-color": activeColor } as React.CSSProperties}
          >
            More About me
          </button>
          <p className="mt-28 font-bold text-3xl leading-10">
            <span className="block mb-2">Light & Dark Mode</span>
            <span className="block">Theme Colors</span>
          </p>
        </div>
        <div
          className={`relative max-w-xs px-7 py-14 flex justify-center after:absolute after:bottom-[95%] after:right-[95%] bg-black after:w-16 after:h-16 after:border-l-8 after:border-t-8 after:border-[var(--active-theme-color)] before:absolute before:top-[95%] before:left-[95%] before:w-16 before:h-16 before:border-r-8 before:border-b-8 before:border-[var(--active-theme-color)]`}
          style={
            {
              "--active-theme-color": activeColor,
            } as React.CSSProperties
          }
        >
          <img className="" src="./images/cat.coder.jpg" alt="cat coder" />
        </div>
      </div>
      <ControlPanel />
    </div>
  );
});
