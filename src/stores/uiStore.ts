import { makeAutoObservable } from "mobx";

class UiStore {
  amount = 1;

  constructor() {
    makeAutoObservable(this);
  }

  // computed
  get price(): string {
    return `$${this.amount}`;
  }

  increment(): void {
    this.amount += 1;
  }
}

export default new UiStore();
