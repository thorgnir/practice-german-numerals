import { RootStore } from './root';
import { makeAutoObservable } from 'mobx';
import {
  NumberRanges,
  NumberRangeType,
  NumbersRange,
} from '../constants/ranges';
import { numToWord } from 'num-words-de';

const getRandomNumber = (range: NumbersRange): number => {
  return Math.floor(Math.random() * (range.max - range.min) + range.min);
};

export class NumbersStore {
  currentNumber = 0;
  currentNumberAsText = '';
  currentRange: NumbersRange = NumberRanges[NumberRangeType.ZeroToHundred];
  currentInputValue?: string;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this, {});
    this.nextNumber();
  }

  setRange(range: NumbersRange) {
    this.currentRange = range;
  }

  nextNumber() {
    this.currentNumber = getRandomNumber(this.currentRange);
    this.currentNumberAsText = numToWord(this.currentNumber);
    this.currentInputValue = '';
  }

  setCurrentInputValue(value: string) {
    this.currentInputValue = value;
  }

  checkCurrentNumber() {
    if (this.currentInputValue === this.currentNumber.toString()) {
      this.rootStore.historyStore.addHistoryItem({
        question: this.currentNumberAsText,
        answer: this.currentNumber.toString(),
        firstTrySolved: true,
        time: undefined,
      });

      this.nextNumber();
    }
  }
}
