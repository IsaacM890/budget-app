import { faThLarge, faExchangeAlt, faChartPie, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const navGroup = [
  {
    icon: faThLarge,
    label: 'Dashboard',
    route: '/',
    id: 1,
    color: 'white',
  },
  {
    icon: faExchangeAlt,
    label: 'Transactions',
    route: '/transactions',
    id: 2,
    color: 'white',
  },
  {
    icon: faChartPie,
    label: 'Charts',
    route: '/charts',
    id: 3,
    color: 'white',
  },
  {
    icon: faCreditCard,
    label: 'Cards',
    route: '/cards',
    id: 4,
    color: 'white',
  },
  {
    icon: faUser,
    label: 'User Profile',
    route: '/profile',
    id: 5,
    color: 'white',
  },
];

export default navGroup;
