import i18n from '#i18n/settings.i18n';
import { SummaryCardComponentProps } from '#types/props/summaryCard.types';

export const summaryCards: SummaryCardComponentProps[] = [
  {
    description: i18n.t('summary_card.happy_customers'),
    initialValue: 100,
    suffix: '+',
    value: 200
  },
  {
    description: i18n.t('summary_card.properties_for_clients'),
    suffix: 'k+',
    value: 10
  },
  {
    description: i18n.t('summary_card.years_of_experience'),
    suffix: '+',
    value: 16
  }
];
