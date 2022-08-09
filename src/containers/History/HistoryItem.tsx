import React from 'react';
import { IHistoryItem } from '../../stores/history';

interface Props {
  value: IHistoryItem;
}

export const HistoryItem: React.FC<Props> = ({ value }) => {
  return (
    <div>
      {value.question} - {value.answer}
    </div>
  );
};
