import { makeAutoObservable } from "mobx";
import { COLORS } from "../default.settings";

export interface SettingsWebsiteI {
  darkMode: boolean;
  activeColor: string;
  isOpenNavBar: boolean;

  setColor: (value: string) => void;
  toggleDarkMode: () => void;
  openNavBar: () => void;
  closeNavBar: () => void;
}

export class SettingsWebsite {
  darkMode = false;
  activeColor = COLORS["RED"];
  isOpenNavBar = false;
  constructor() {
    makeAutoObservable(this);
  }

  setColor = (value: string) => {
    this.activeColor = value;
  };

  toggleDarkMode = () => {
    this.darkMode = !this.darkMode;
  };

  openNavBar = () => {
    this.isOpenNavBar = true;
  };

  closeNavBar = () => {
    this.isOpenNavBar = false;
  };
}
