import { makeAutoObservable, observable } from "mobx";
import { SettingsWebsite, SettingsWebsiteI } from "./settings.website";

class RootStore {
  settingsWebsite: SettingsWebsiteI;
  constructor() {
    this.settingsWebsite = observable(new SettingsWebsite());
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
