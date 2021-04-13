import { faThLarge, faExchangeAlt, faChartPie, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import theme from '../style/theme/theme';
import { NAVGROUPELABEL, NAVGROUPEROUTE } from '../enums';

const navGroup = [
  {
    icon: faThLarge,
    label: NAVGROUPELABEL.DASHBOARD,
    route: NAVGROUPEROUTE.DASHBOARD,
    id: 1,
    color: theme.colors.white.primary,
  },
  {
    icon: faExchangeAlt,
    label: NAVGROUPELABEL.TRANSACTIONS,
    route: NAVGROUPEROUTE.TRANSACTIONS,
    id: 2,
    color: theme.colors.white.primary,
  },
  {
    icon: faChartPie,
    label: NAVGROUPELABEL.CHARTS,
    route: NAVGROUPEROUTE.CHARTS,
    id: 3,
    color: theme.colors.white.primary,
  },
  {
    icon: faCreditCard,
    label: NAVGROUPELABEL.CARDS,
    route: NAVGROUPEROUTE.CARDS,
    id: 4,
    color: theme.colors.white.primary,
  },
  {
    icon: faUser,
    label: NAVGROUPELABEL.USERPROFILE,
    route: NAVGROUPEROUTE.USERPROFILE,
    id: 5,
    color: theme.colors.white.primary,
  },
];

export default navGroup;
