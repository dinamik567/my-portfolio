import SettingsIcon from "../../assets/icons/settings.svg?react";
import SunIcon from "../../assets/icons/light-mode.svg?react";
import MoonIcon from "../../assets/icons/night-mode.svg?react";
// import LanguageIcon from "../../assets/icons/language.svg?react";
import { useEffect, useRef } from "react";
import { COLORS } from "../../default.settings";
import { rootStore } from "../../store/global.store";
import { observer } from "mobx-react";

export const ControlPanel = observer(() => {
  const refPanel = useRef<HTMLDivElement | null>(null);

  const {
    darkMode,
    setColor,
    toggleDarkMode,
    isOpenThemeColors,
    toggleThemeColors,
    closeThemeColors,
  } = rootStore.settingsWebsite;

  const handleClickSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleThemeColors();
  };

  const handleToggleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleDarkMode();
  };

  const handleClickRed = () => setColor(COLORS["RED"]);

  const handleClickOrange = () => setColor(COLORS["ORANGE"]);

  const handleClickGreen = () => setColor(COLORS["GREEN"]);

  const handleClickBlue = () => setColor(COLORS["BLUE"]);

  const handleClickPink = () => setColor(COLORS["PINK"]);

  useEffect(() => {
    if (!refPanel.current) return;

    const handleClick = (e: MouseEvent) => {
      if (!refPanel.current?.contains(e.target as Node) && isOpenThemeColors) {
        closeThemeColors();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [isOpenThemeColors, closeThemeColors]);

  return (
    <div
      ref={refPanel}
      className="absolute top-4 right-3 flex justify-between gap-4 dark:text-slate-200"
    >
      <div
        className={`${
          isOpenThemeColors ? "translate-x-0" : "translate-x-[500%]"
        } flex flex-col gap-2 h-28 dark:bg-[#222222] bg-white pt-2 px-4 rounded transition-transform duration-500 ease-in-out`}
      >
        <h3 className="text-left text-lg">Theme Colors</h3>
        <div className="flex justify-between gap-2 py-2">
          <button
            onClick={handleClickRed}
            className={`bg-[var(--my-color)] xs:w-10 xs:h-10 w-8 h-8 rounded-full`}
            style={{ "--my-color": COLORS["RED"] } as React.CSSProperties}
          />
          <button
            onClick={handleClickOrange}
            className={`bg-[var(--my-color)] xs:w-10 xs:h-10 w-8 h-8 rounded-full`}
            style={{ "--my-color": COLORS["ORANGE"] } as React.CSSProperties}
          />
          <button
            onClick={handleClickGreen}
            className={`bg-[var(--my-color)] xs:w-10 xs:h-10 w-8 h-8 rounded-full`}
            style={{ "--my-color": COLORS["GREEN"] } as React.CSSProperties}
          />
          <button
            onClick={handleClickBlue}
            className={`bg-[var(--my-color)] xs:w-10 xs:h-10 w-8 h-8 rounded-full`}
            style={{ "--my-color": COLORS["BLUE"] } as React.CSSProperties}
          />
          <button
            onClick={handleClickPink}
            className={`bg-[var(--my-color)] xs:w-10 xs:h-10 w-8 h-8 rounded-full`}
            style={{ "--my-color": COLORS["PINK"] } as React.CSSProperties}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={(e) => handleClickSettings(e)}
          className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center"
        >
          <SettingsIcon fill="currentColor" width={20} height={20} />
        </button>
        <button
          onClick={(e) => handleToggleDarkMode(e)}
          className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center"
        >
          {!darkMode && <MoonIcon fill="currentColor" width={24} height={24} />}
          {darkMode && <SunIcon fill="currentColor" width={24} height={24} />}
        </button>
        {/* <button className="w-10 h-10 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 text-light_text flex justify-center items-center">
          <LanguageIcon fill="currentColor" width={24} height={24} />
        </button> */}
      </div>
    </div>
  );
});
