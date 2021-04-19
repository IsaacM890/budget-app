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
import { breakpoints } from '../../../style/theme/theme';

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
  @media (max-width: ${breakpoints.XLScreen}) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 4fr;
  }
  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 4fr;
  }
`;

const HomePage: FC = () => {
  const { setTransactions } = useContext(TransactionsContext);
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await BudgetServiceApi.getLatestTransactionsByLimit(10);
      const userData = await BudgetServiceApi.getUser('607dcbc29065af00081c9dd0');
      setTransactions(transactionsData);
      setUser(userData);
    };
    fetchData();
  }, []);
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
