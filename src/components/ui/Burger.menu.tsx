import { observer } from "mobx-react";
import { rootStore } from "../../store/global.store";

export const BurgerMenu = observer(() => {
  const { openNavBar } = rootStore.settingsWebsite;

  const handleClickCloseNavBar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openNavBar();
  };

  return (
    <button
      onClick={(e) => handleClickCloseNavBar(e)}
      className="lg:hidden absolute top-4 left-4 w-11 h-11 rounded-full dark:bg-[#222222] bg-gray-300 dark:text-slate-200 flex justify-center items-center"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span className="w-full h-1 bg-light_text dark:bg-slate-200 rounded-lg" />
        <span className="w-full h-1 bg-light_text dark:bg-slate-200 rounded-lg" />
        <span className="w-full h-1 bg-light_text dark:bg-slate-200 rounded-lg" />
      </div>
    </button>
  );
});
