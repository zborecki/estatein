import { ApartmentsIcon } from '#assets/icons/ApartmentsIcon';
import { CameraIcon } from '#assets/icons/CameraIcon';
import { HomeIcon } from '#assets/icons/HomeIcon';
import { SunIcon } from '#assets/icons/SunIcon';
import i18n from '#i18n/settings.i18n';
import { ItsSimpleCardComponentProps } from '#types/props/itsSimpleCard.types';

export const itsSimpleCards: ItsSimpleCardComponentProps[] = [
  {
    icon: HomeIcon,
    title: i18n.t('its_simple_cards.home')
  },
  {
    icon: CameraIcon,
    title: i18n.t('its_simple_cards.camera')
  },
  {
    icon: ApartmentsIcon,
    title: i18n.t('its_simple_cards.apartments')
  },
  {
    icon: SunIcon,
    title: i18n.t('its_simple_cards.sun')
  }
];
