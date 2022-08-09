export interface NumbersRange {
  min: number;
  max: number;
}

export enum NumberRangeType {
  ZeroToHundred,
  ZeroToThousand,
  ZeroToTenThousands,
  ZeroToHundredThousands,
  ZeroToMillion,
  ZeroToBillion,
}

export const NumberRanges: Record<NumberRangeType, NumbersRange> = {
  [NumberRangeType.ZeroToHundred]: { min: 0, max: 100 },
  [NumberRangeType.ZeroToThousand]: { min: 0, max: 1000 },
  [NumberRangeType.ZeroToTenThousands]: { min: 0, max: 10000 },
  [NumberRangeType.ZeroToHundredThousands]: { min: 0, max: 100000 },
  [NumberRangeType.ZeroToMillion]: { min: 0, max: 1000000 },
  [NumberRangeType.ZeroToBillion]: { min: 0, max: 1000000000 },
};
