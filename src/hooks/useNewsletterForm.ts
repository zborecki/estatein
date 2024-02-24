import { useForm, SubmitHandler } from 'react-hook-form';

import { newsletterDefaultValues } from '#forms/settings/newsletter.settings';
import { NewsletterForm } from '#types/forms/newsletter.form';

export const useNewsletterForm = () => {
  const { control, handleSubmit } = useForm<NewsletterForm>({
    defaultValues: newsletterDefaultValues
  });

  const onSubmit: SubmitHandler<NewsletterForm> = (data) => {
    console.log(data);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit)
  };
};
