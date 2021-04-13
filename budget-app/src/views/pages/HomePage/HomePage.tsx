import React, { FC, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import transactionsList from '../Transactions/Transactions';
import Cards from '../Cards/Cards';
import Charts from '../Charts/Charts';
import BudgetServiceApi from '../../../services/budgetServiceApi';
import NavBar from '../../../components/organisms/NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import PaymentBar from '../../../components/organisms/PaymentBar/PaymentBar';
import theme from '../../../style/theme/theme';

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
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: ${theme.breakpoints.XLScreen}) {
    width: 95%;
  }
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 4fr;
  }
  @media (max-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: 4fr;
  }
`;

const HomePage: FC = () => {
  const { setTransactions } = useContext(TransactionsContext);
  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await BudgetServiceApi.getLatestTransactionsByLimit(10);

      setTransactions(transactionsData);
    };
    fetchData();
  }, []);
  return (
    <Router>
      <SHomePageContainer>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/transactions" component={transactionsList} />
          <Route path="/charts" component={Charts} />
          <Route path="/cards" component={Cards} />
        </Switch>
        <PaymentBar />
      </SHomePageContainer>
    </Router>
  );
};

export default HomePage;
