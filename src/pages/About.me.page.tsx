import { observer } from "mobx-react";
import { ControlPanel } from "../components/ui/Control.panel";
import { rootStore } from "../store/global.store";
import { TitleSection } from "../components/Title.section";
import { NavLink } from "react-router";
import { BurgerMenu } from "../components/ui/Burger.menu";

import DownloadIcon from "../assets/icons/download.svg?react";

const allTech = [
  "React",
  "TypeScript",
  "Redux",
  "Mobx",
  "RTK Query",
  "Tailwind",
  "Material UI",
  "CSS",
  "SCSS",
  "HTML",
  "REST API",
  "WebSockets",
  "JSON",
];

export const AboutMePage = observer(() => {
  const { activeColor } = rootStore.settingsWebsite;
  return (
    <div className="relative bg-light_prime dark:bg-dark_prime dark:text-dark_text  w-full h-screen pt-5 pb-16 xs:px-10 px-4 overflow-y-scroll overflow-x-hidden">
      <ControlPanel />
      <BurgerMenu />
      <div className="max-w-[1080px] mx-auto">
        <TitleSection title="Обо мне" />
        <h3 className="mb-5 font-semibold text-xl">
          Меня зовут Владислав Ирхин{" "}
        </h3>
        <div className="mb-10">
          <p className="mb-4">
            Я фронтенд разработчик, с опытом работы в создании интерактивных
            веб-приложений. Постоянно стремлюсь к саморазвитию и следую лучшим
            практикам в области фронтенд разработки. Обладаю умением быстро
            обучаться новым технологиям. Умею эффективно взаимодействовать с
            командой разработки, обсуждать идеи, решать проблемы и достигать
            поставленных целей.
          </p>
        </div>

        <div className="mb-10 flex gap-4">
          <a
            className="py-2 px-5 flex justify-start gap-2 rounded-lg bg-[var(--my-color)] cursor-pointer text-white"
            href="https://hh.ru/resume_converter/%D0%98%D1%80%D1%85%D0%B8%D0%BD%20%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%20%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=2100893bff0dfbe5d60039ed1f626c726d4731&type=pdf&hhtmFrom=&hhtmSource=resume"
            style={{ "--my-color": activeColor } as React.CSSProperties}
          >
            <span>Резюме</span>
            <DownloadIcon width={24} height={24} />
          </a>{" "}
          <NavLink
            to="/contact"
            className="py-2 px-5 rounded-lg bg-[var(--my-color)] cursor-pointer text-white"
            style={{ "--my-color": activeColor } as React.CSSProperties}
          >
            Написать мне
          </NavLink>
        </div>

        <h3 className="mb-5 font-semibold text-xl">Профессиональные навыки</h3>
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:gap-16">
          <div className="w-full">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div
                className="w-full h-2 rounded-lg  bg-[linear-gradient(to_right,var(--my-color)_95%,#b5acac6e_5%)]"
                style={{ "--my-color": activeColor } as React.CSSProperties}
              ></div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span>CSS</span>
                <span>95%</span>
              </div>
              <div
                className="w-full h-2 rounded-lg   bg-[linear-gradient(to_right,var(--my-color)_95%,#b5acac6e_5%)]"
                style={{ "--my-color": activeColor } as React.CSSProperties}
              ></div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span>JS</span>
                <span>85%</span>
              </div>
              <div
                className="w-full h-2 rounded-lg   bg-[linear-gradient(to_right,var(--my-color)_85%,#b5acac6e_5%)]"
                style={{ "--my-color": activeColor } as React.CSSProperties}
              ></div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span>React</span>
                <span>75%</span>
              </div>
              <div
                className="w-full h-2 rounded-lg  bg-[linear-gradient(to_right,var(--my-color)_75%,#b5acac6e_25%)]"
                style={{ "--my-color": activeColor } as React.CSSProperties}
              ></div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span>TS</span>
                <span>70%</span>
              </div>
              <div
                className="w-full h-2 rounded-lg   bg-[linear-gradient(to_right,var(--my-color)_70%,#b5acac6e_30%)]"
                style={{ "--my-color": activeColor } as React.CSSProperties}
              ></div>
            </div>
          </div>
        </div>

        <h3 className="mb-5 font-semibold text-xl">Все технологии</h3>
        <div className="mb-10 flex flex-wrap gap-2">
          {allTech.map((item) => (
            <div
              key={item}
              className="inline-block xs:px-3 xs:py-2 px-2 py-1 bg-[var(--my-color)] rounded-md text-slate-50 font-medium"
              style={{ "--my-color": activeColor } as React.CSSProperties}
            >
              {item}
            </div>
          ))}
        </div>

        <h3 className="mb-5 font-semibold text-xl">Мой опыт</h3>
        <div className="shadow-2xl mb-10 py-6 sx:px-10 px-4 rounded-xl bg-slate-100 dark:bg-[#222222]">
          <div className="font-bold mb-2">2023 - 2025</div>
          <div className="mb-1">
            <span className="mr-2 font-bold">Компания:</span> Хартл
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">Должность:</span>{" "}
            <span>Frontend-разработчик</span>
          </div>
          <div>
            <div className="font-bold mb-2">О компании:</div>
            <div className="xs:ml-8 ml-3">
              Цифровое кадровое агентство, специализирующееся на подборе
              профессиональных кадров для компаний и индивидуальных
              предпринимателей.
            </div>
          </div>
          <div className="mb-2">
            <div className="font-bold mb-2"> Обязанности:</div>
            <ul className="xs:ml-8 ml-3 flex flex-col gap-y-3">
              <li>- Разработка и поддержка программных продуктов компании.</li>
              <li>- Проведение coderewie.</li>
              <li>- Участие в планировании работы команды.</li>
              <li>
                - Проектирование, разработка новых фич и рефакторинг старых.
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="mr-2 font-bold">Стек:</span> JavaScript, React,
            TypeScript, GIT.
          </div>
          <div>
            <ul className="xs:ml-8 ml-3 flex flex-col gap-y-3">
              <li>
                - Участвовал в создании сервиса для работодателя на новом стеке
                технологий, осуществлял переход с legacy на React.
              </li>
              <li>
                - Разработал и добавил функционал с помощью технологий React,
                Redux Toolki, RTK Query и взаимодействие с бекендом посредством
                API, который позволяет пользователю контролировать процесс найма
                (посмотреть результаты; собеседования, предстоящие митинги и
                прочее).
              </li>
              <li>
                - Реализовал модуль для управления состоянием админ панели с
                использованием Redux Toolkit, что позволило упростить кодовую
                базу и повысить его поддержку.
              </li>
              <li>
                {" "}
                - Проводил рефакторинг кода, улучшил читаемость и поддержку
                кода, что сократило время на разработку новых функций и
                устранение ошибок.
              </li>
              <li>
                - Оптимизировал производительность сайта, убрал лишние перендеры
                на странице, облегчил структуру сайта и он стал загружаться
                быстрее.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-xl">Увлечения:</h3>
          <p className="mb-2">
            В свободное от работы время нравиться гулять на свежем воздухе,
            ходить в тренажерный зал, смотреть фильмы, изучать английский,
            читать книги — научную фантастику, психологический реализм и романы.
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Любимые книги:</span> "Кресный
            отец", "Марсианин", "Бог путешествует инкогнито".
          </p>
          <p>
            <span className="font-bold mr-2">Любимые фильмы:</span> "Бойцовский
            клуб", "Области тьмы", "Интерстеллар"
          </p>
        </div>
      </div>
    </div>
  );
});
