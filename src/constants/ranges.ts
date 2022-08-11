export interface NumbersRange {
  min: number;
  max: number;
}

export enum NumberRangeType {
  ZeroToHundred,
  HundredToThousand,
  ThousandToTenThousands,
  TenThousandsToHundredThousands,
  HundredThousandsToMillion,
  MillionToBillion,
}

export const NumberRanges: Record<NumberRangeType, NumbersRange> = {
  [NumberRangeType.ZeroToHundred]: { min: 1, max: 99 },
  [NumberRangeType.HundredToThousand]: { min: 100, max: 999 },
  [NumberRangeType.ThousandToTenThousands]: { min: 1000, max: 9999 },
  [NumberRangeType.TenThousandsToHundredThousands]: { min: 10000, max: 99999 },
  [NumberRangeType.HundredThousandsToMillion]: { min: 100000, max: 999999 },
  [NumberRangeType.MillionToBillion]: { min: 1000000, max: 999999999 },
};
