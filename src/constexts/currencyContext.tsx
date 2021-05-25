import React, { useReducer, createContext } from 'react';
import { ICurrencyState } from '../models/index';
import CurrencyReducer from '../reducers/currencyReducer';
import { ACTIONS } from '../enums/index';

const initialState = {
  currencyRates: {},
  setCurrencyRates: () => {},
  selectedCurrency: 'USD',
  setSelectedCurrency: () => {},
};

export const CurrencyContext = createContext<ICurrencyState>(initialState);

const CurrencyContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(CurrencyReducer, initialState);

  const setSelectedCurrency = (selectedCurrency: string) => {
    dispatch({ type: ACTIONS.GET_CURRENCY, payload: selectedCurrency });
  };
  const setCurrencyRates = (currencyRate: object) => {
    dispatch({ type: ACTIONS.GET_CURRENCY_RATE, payload: currencyRate });
  };
  return (
    <CurrencyContext.Provider
      value={{
        ...state,
        setCurrencyRates,
        setSelectedCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
