import { makeAutoObservable, observable } from "mobx";
import { ThemeColors, ThemeColorsI } from "./theme.colors";

class RootStore {
  themeColors: ThemeColorsI;
  constructor() {
    this.themeColors = observable(new ThemeColors());
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
