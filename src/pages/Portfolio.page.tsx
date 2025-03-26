import { observer } from "mobx-react";
import { ControlPanel } from "../components/ui/Control.panel";
import { TitleSection } from "../components/Title.section";

export const PortfolioPage = observer(() => {
  return (
    <div className="relative bg-light_prime dark:bg-dark_prime dark:text-dark_text w-[87%] h-screen pt-5 pb-16 px-10 overflow-y-scroll overflow-x-hidden">
      <ControlPanel />
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
