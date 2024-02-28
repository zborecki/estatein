import { object, string } from 'yup';

import i18n from '#i18n/settings.i18n';
import { SchemaOf } from '#types/forms/common.types';
import { NewsletterForm } from '#types/forms/newsletter.form';

export const newsletterSchema: SchemaOf<NewsletterForm> = object({
  email: string()
    .email(i18n.t('validation.email'))
    .required(i18n.t('validation.required'))
});
