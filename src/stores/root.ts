import { NumbersStore } from './numbers';
import { HistoryStore } from './history';

export class RootStore {
  numbersStore: NumbersStore;
  historyStore: HistoryStore;

  constructor() {
    this.numbersStore = new NumbersStore(this);
    this.historyStore = new HistoryStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
