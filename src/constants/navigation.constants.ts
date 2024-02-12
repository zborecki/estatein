import i18n from '#i18n/settings.i18n';
import { ROUTE } from '#router/paths.router';
import { Link } from '#types/atoms.types';

export const navigation: Link[] = [
  {
    label: i18n.t('label.home'),
    to: ROUTE.HOME
  },
  {
    label: i18n.t('label.about_us'),
    to: ROUTE.ABOUT_US
  },
  {
    label: i18n.t('label.properties'),
    to: ROUTE.PROPERTIES
  }
];
