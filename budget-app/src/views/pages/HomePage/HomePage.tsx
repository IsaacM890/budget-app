import React, { FC, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { UserContext } from '../../../constexts/userContext';
import transactionsList from '../Transactions/Transactions';
import Cards from '../Cards/Cards';
import Charts from '../Charts/Charts';
import BudgetServiceApi from '../../../services/budgetServiceApi';
import NavBar from '../../../components/organisms/NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import PaymentBar from '../../../components/organisms/PaymentBar/PaymentBar';
import { breakPoints } from '../../../style/theme/theme';

const SHomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  height: 95vh;
  max-height: 95vh;
  margin: 10px auto;
  overflow: auto;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: ${breakPoints.XLScreen}) {
    width: 95%;
  }
  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 4fr;
  }
  @media (max-width: ${breakPoints.laptop}) {
    grid-template-columns: 4fr;
  }
`;

const HomePage: FC = () => {
  const { setTransactions, selectedCurrency, setCurrencyRates } = useContext(TransactionsContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsData = await BudgetServiceApi.getLatestTransactionsByLimit(10);
        const userData = await BudgetServiceApi.getUser('60805fac3e04b30008493f6c');

        if (transactionsData?.length) {
          setTransactions(transactionsData);
        }
        if (userData) {
          setUser(userData);
        }
      } catch (err) {
        console.error('An error has occurred : ', err.message);
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currenciesData = await BudgetServiceApi.getCurrency(selectedCurrency);
        setCurrencyRates(currenciesData.conversion_rates);
        console.log(currenciesData);
      } catch (err) {
        console.error('An error has occurred : ', err.message);
        throw new Error(err);
      }
    };
    fetchData();
  }, [selectedCurrency]);

  return (
    <Router>
      <SHomePageContainer>
        <NavBar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/transactions" component={transactionsList} exact />
          <Route path="/charts" component={Charts} exact />
          <Route path="/cards" component={Cards} exact />
        </Switch>
        <PaymentBar />
      </SHomePageContainer>
    </Router>
  );
};

export default HomePage;
