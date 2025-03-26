import { makeAutoObservable } from "mobx";
import { COLORS } from "../default.settings";

export interface ThemeColorsI {
  darkMode: boolean;
  activeColor: string;

  setColor: (value: string) => void;
  toggleDarkMode: () => void;
}

export class ThemeColors {
  darkMode = false;
  activeColor = COLORS["RED"];
  constructor() {
    makeAutoObservable(this);
  }

  setColor = (value: string) => {
    this.activeColor = value;
  };

  toggleDarkMode = () => {
    this.darkMode = !this.darkMode;
  };
}

export const themeColors = new ThemeColors();
