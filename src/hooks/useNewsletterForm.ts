import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { newsletterDefaultValues } from '#forms/settings/newsletter.settings';
import { newsletterSchema } from '#forms/validations/newsletter.validation';
import { NewsletterForm } from '#types/forms/newsletter.form';

export const useNewsletterForm = () => {
  const { control, handleSubmit } = useForm<NewsletterForm>({
    defaultValues: newsletterDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(newsletterSchema)
  });

  const onSubmit: SubmitHandler<NewsletterForm> = (data) => {
    console.log(data);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit)
  };
};
