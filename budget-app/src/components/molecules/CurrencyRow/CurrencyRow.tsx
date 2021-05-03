import React, { FC, useContext } from 'react';
import { CurrencyContext } from '../../../constexts/currencyContext';
import { ICurrencyRowProps } from '../../../models';

const CurrencyRow: FC<ICurrencyRowProps> = () => {
  const { setSelectedCurrency, currencyRates } = useContext(CurrencyContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCurrency(value);
  };
  console.log('currencyRate', currencyRates);

  return (
    <div>
      <select onChange={onChange}>
        {Object.keys(currencyRates).map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
