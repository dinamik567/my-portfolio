import { observer } from "mobx-react";
import { ControlPanel } from "../components/ui/Control.panel";
import { TitleSection } from "../components/Title.section";
import { BurgerMenu } from "../components/ui/Burger.menu";

export const PortfolioPage = observer(() => {
  return (
    <div className="relative bg-light_prime dark:bg-dark_prime dark:text-dark_text w-full h-screen pt-5 pb-16 px-10 overflow-hidden">
      <ControlPanel />
      <BurgerMenu />
      <div className="max-w-[1080px] mx-auto">
        <TitleSection title="Porfolio" />
        <p>
          Я работаю над обновлением и переработкой своих проектов, чтобы
          представить их в наилучшем виде. Скоро обновлю портфолио! 😊
        </p>
      </div>
    </div>
  );
});
