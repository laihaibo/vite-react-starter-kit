import { makeAutoObservable } from "mobx";

class DataStore {
  amount = 1;

  constructor() {
    makeAutoObservable(this);
  }

  // computed
  get price(): string {
    return `$${this.amount}`;
  }
}

export default new DataStore();
