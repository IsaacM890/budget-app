import { faThLarge, faExchangeAlt, faChartPie, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { colors } from '../style/theme/theme';
import { NAV_GROUPE_LABEL, NAV_GROUPE_ROUTE } from '../enums';

const navGroup = [
  {
    icon: faThLarge,
    label: NAV_GROUPE_LABEL.DASHBOARD,
    route: NAV_GROUPE_ROUTE.DASHBOARD,
    id: 1,
    color: colors.default,
  },
  {
    icon: faExchangeAlt,
    label: NAV_GROUPE_LABEL.TRANSACTIONS,
    route: NAV_GROUPE_ROUTE.TRANSACTIONS,
    id: 2,
    color: colors.default,
  },
  {
    icon: faChartPie,
    label: NAV_GROUPE_LABEL.CHARTS,
    route: NAV_GROUPE_ROUTE.CHARTS,
    id: 3,
    color: colors.default,
  },
  {
    icon: faCreditCard,
    label: NAV_GROUPE_LABEL.CARDS,
    route: NAV_GROUPE_ROUTE.CARDS,
    id: 4,
    color: colors.default,
  },
  {
    icon: faUser,
    label: NAV_GROUPE_LABEL.USER_PROFILE,
    route: NAV_GROUPE_ROUTE.USER_PROFILE,
    id: 5,
    color: colors.default,
  },
];

export default navGroup;
