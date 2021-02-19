import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

export const payGroup = [
  {
    name: 'check',
    text: 'Deposit from ATL',
    icon: faCheck,
    color: 'white',
    backgroundcolor: '#8a7be5',
    id: 1,
  },
  {
    name: 'Cancelled',
    text: 'Cancelled',
    icon: faTimes,
    color: 'white',
    backgroundcolor: '#FF8788',
    id: 2,
  },
  {
    name: 'sync',
    text: 'Deposit from ATL',
    icon: faSyncAlt,
    color: 'black',
    backgroundcolor: 'white',
    id: 3,
  },
  {
    name: 'refund',
    text: 'Refund',
    icon: faReply,
    color: 'black',
    backgroundcolor: 'white',
    id: 4,
  },
  {
    name: 'paypal',
    text: 'Deposit PayPal',
    icon: faPaypal,
    color: 'white',
    backgroundcolor: '#8a7be5',
    id: 5,
  },
];
