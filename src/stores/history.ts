import { RootStore } from './root';
import { makeAutoObservable } from 'mobx';

export interface IHistoryItem {
  question: string;
  answer: string;
  firstTrySolved: boolean;
  time?: string;
}

export class HistoryStore {
  history: IHistoryItem[] = [];
  constructor(private rootStore: RootStore) {
    makeAutoObservable(this, {});
  }

  addHistoryItem(item: IHistoryItem) {
    this.history.push(item);
  }
}
