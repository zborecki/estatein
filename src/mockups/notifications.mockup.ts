import { Notification } from '#types/modules.types';

export const NOTIFICATIONS_MOCKUP: Notification[] = [
  {
    button: {
      label: 'Learn More',
      to: 'https://www.google.pl/'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    button: {
      label: 'See More',
      to: 'https://ui8.net/'
    },
    message: 'Donec placerat quam turpis'
  },
  {
    message: 'Etiam feugiat magna eu ultricies hendrerit'
  }
];
