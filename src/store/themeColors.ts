import { makeAutoObservable } from "mobx";
import { COLORS } from "../default.settings";

export interface ThemeColorsI {
  activeColor: string;

  setBlueColor: (value: string) => void;
}

export class ThemeColors {
  activeColor = COLORS["RED"];
  constructor() {
    makeAutoObservable(this);
  }

  setBlueColor = (value: string) => {
    this.activeColor = value;
  };
}

export const themeColors = new ThemeColors();
