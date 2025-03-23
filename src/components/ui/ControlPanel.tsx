import SettingsIcon from "../../assets/icons/settings.svg?react";
import SunIcon from "../../assets/icons/light-mode.svg?react";
import MoonIcon from "../../assets/icons/night-mode.svg?react";
import LanguageIcon from "../../assets/icons/language.svg?react";
import { useState } from "react";
import { COLORS } from "../../default.settings";
import { rootStore } from "../../store/global.store";
import { observer } from "mobx-react";

export const ControlPanel = observer(() => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const { darkMode } = rootStore.themeColors;

  const handleClickSettings = () => setIsOpenPanel((prev) => !prev);

  const handleToggleDarkMode = () => rootStore.themeColors.toggleDarkMode();

  const handleClickRed = () =>
    rootStore.themeColors.setBlueColor(COLORS["RED"]);

  const handleClickOrange = () =>
    rootStore.themeColors.setBlueColor(COLORS["ORANGE"]);

  const handleClickGreen = () =>
    rootStore.themeColors.setBlueColor(COLORS["GREEN"]);

  const handleClickBlue = () =>
    rootStore.themeColors.setBlueColor(COLORS["BLUE"]);

  const handleClickPink = () =>
    rootStore.themeColors.setBlueColor(COLORS["PINK"]);

  return (
    <div className="dark absolute top-4 right-3 flex justify-between gap-4 dark:text-slate-200">
      <div
        className={`${
          isOpenPanel ? "translate-x-0" : "translate-x-[500%]"
        } flex flex-col gap-2 h-28 bg-[#222222] pt-2 px-4 rounded transition-transform duration-500 ease-in-out`}
      >
        <h3 className="text-left text-lg">Theme Colors</h3>
        <div className="flex justify-between gap-2 py-2">
          <button
            onClick={handleClickRed}
            className={`bg-[var(--my-color)] w-10 h-10 rounded-full`}
            style={{ "--my-color": COLORS["RED"] } as React.CSSProperties}
          ></button>
          <button
            onClick={handleClickOrange}
            className={`bg-[var(--my-color)] w-10 h-10 rounded-full`}
            style={{ "--my-color": COLORS["ORANGE"] } as React.CSSProperties}
          ></button>
          <button
            onClick={handleClickGreen}
            className={`bg-[var(--my-color)] w-10 h-10 rounded-full`}
            style={{ "--my-color": COLORS["GREEN"] } as React.CSSProperties}
          ></button>
          <button
            onClick={handleClickBlue}
            className={`bg-[var(--my-color)] w-10 h-10 rounded-full`}
            style={{ "--my-color": COLORS["BLUE"] } as React.CSSProperties}
          ></button>
          <button
            onClick={handleClickPink}
            className={`bg-[var(--my-color)] w-10 h-10 rounded-full`}
            style={{ "--my-color": COLORS["PINK"] } as React.CSSProperties}
          ></button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleClickSettings}
          className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center"
        >
          <SettingsIcon fill="currentColor" width={20} height={20} />
        </button>
        <button
          onClick={handleToggleDarkMode}
          className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center"
        >
          {!darkMode && <MoonIcon fill="currentColor" width={24} height={24} />}
          {darkMode && <SunIcon fill="currentColor" width={24} height={24} />}
        </button>
        <button className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center">
          <LanguageIcon fill="currentColor" width={24} height={24} />
        </button>
      </div>
    </div>
  );
});
