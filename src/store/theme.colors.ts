import { makeAutoObservable } from "mobx";
import { COLORS } from "../default.settings";

export interface ThemeColorsI {
  darkMode: boolean;
  activeColor: string;
  isOpenNavBar: boolean;

  setColor: (value: string) => void;
  toggleDarkMode: () => void;
  openNavBar: () => void;
  closeNavBar: () => void;
}

export class ThemeColors {
  darkMode = false;
  activeColor = COLORS["RED"];
  isOpenNavBar = true;
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

export const themeColors = new ThemeColors();
