import React, { FC, useContext } from 'react';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { ICurrencyRowProps } from '../../../models';

const CurrencyRow: FC<ICurrencyRowProps> = () => {
  const { setSelectedCurrency, currencyRate } = useContext(TransactionsContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCurrency(value);
  };
  return (
    <div>
      <select onChange={onChange}>
        {Object.keys(currencyRate).map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
