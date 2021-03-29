import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const payGroup = [
  {
    name: 'check',
    text: 'Deposit from ATL',
    icon: faCheck,
    color: 'white',
    backgroundcolor: '#8a7be5',
    amount: 1538,
    id: 1,
  },
  {
    name: 'Cancelled',
    text: 'Cancelled',
    icon: faTimes,
    color: 'white',
    backgroundcolor: '#FF8788',
    amount: 5849,
    id: 2,
  },
  {
    name: 'sync',
    text: 'Deposit from ATL',
    icon: faSyncAlt,
    color: 'black',
    backgroundcolor: 'white',
    amount: -849,
    id: 3,
  },
  {
    name: 'refund',
    text: 'Refund',
    icon: faReply,
    color: 'black',
    backgroundcolor: 'white',
    amount: -249,
    id: 4,
  },
  {
    name: 'paypal',
    text: 'Deposit PayPal',
    icon: faPaypal,
    color: 'white',
    backgroundcolor: '#8a7be5',
    amount: 0,
    id: 5,
  },
];

export default payGroup;
