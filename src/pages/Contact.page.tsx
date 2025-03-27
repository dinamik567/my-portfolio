import PhoneIcon from "../assets/icons/phone.svg?react";
import TelegramIcon from "../assets/icons/telegram.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import VkIcon from "../assets/icons/vk.svg?react";

import { observer } from "mobx-react";
import { TitleSection } from "../components/Title.section";
import { ControlPanel } from "../components/ui/Control.panel";
import { rootStore } from "../store/global.store";
import { BurgerMenu } from "../components/ui/Burger.menu";

export const ContactPage = observer(() => {
  const { activeColor } = rootStore.settingsWebsite;
  return (
    <div className=" w-full h-screen relative dark:bg-dark_prime dark:text-white bg-light_prime text-light_text overflow-hidden">
      <div className="max-w-[1080px] mx-auto pt-5 sm:px-10 px-4">
        <TitleSection title="Contacts" />
        <ControlPanel />
        <BurgerMenu />
        <div className="pt-10">
          <div
            className="w-full relative max-w-[700px] min-h-80 rounded-xl shadow-xl p-6 dark:bg-[#222222] text-light_text bg-white before:absolute before:w-16 before:h-16 before:top-6 before:left-6 before:border-t-[6px] before:border-l-[6px] before:border-[var(--my-color)] after:absolute after:w-16 after:h-16 after:bottom-6 after:right-6 after:border-b-[6px] after:border-r-[6px] after:border-[var(--my-color)]"
            style={{ "--my-color": activeColor } as React.CSSProperties}
          >
            <h3 className="text-center mt-5 font-medium text-xl mb-8 dark:text-white">
              Ирхин Владислав
            </h3>
            <div className="flex xs:flex-row flex-col justify-around px-4 gap-2">
              <div>
                <div className="flex justify-start items-center text-sm gap-2 mb-4 dark:text-white">
                  <PhoneIcon fill="currentColor" width={24} height={24} />
                  <a href="">89807039050</a>
                </div>
                <div className="flex justify-start items-center gap-2 mb-4 dark:text-white">
                  <TelegramIcon fill="currentColor" width={24} height={24} />
                  <a href="https://t.me/dinamik567">@dinamik567</a>
                </div>
                <div className="flex justify-start items-center gap-2 dark:text-white">
                  <MailIcon fill="currentColor" width={24} height={24} />
                  <a href="https://t.me/dinamik567">irhin2011@yandex.ru</a>
                </div>
              </div>
              <div>
                <div>
                  {" "}
                  <div className="flex justify-start items-center gap-2 mb-4 dark:text-white">
                    <GithubIcon fill="currentColor" width={24} height={24} />
                    <a href="https://t.me/dinamik567">github</a>
                  </div>
                  <div className="flex justify-start items-center gap-2 dark:text-white">
                    <VkIcon fill="currentColor" width={24} height={24} />
                    <a href="https://vk.com/id78735173">Вконтакте</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
