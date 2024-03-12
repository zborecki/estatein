import { Typography } from '@mui/material';
import { FC } from 'react';

import { DarkPaperComponent } from '#components/DarkPaperComponent';
import { ProfileCardComponent } from '#components/ProfileCardComponent';
import { RatingComponent } from '#components/RatingComponent';
import { testimonialCardStyles } from '#theme/styles/testimonialCard.styles';
import { TestimonialCardComponentProps } from '#types/props/testimonialCard.types';

export const TestimonialCardComponent: FC<TestimonialCardComponentProps> = ({
  avatar, companyName, fullName, opinion, rating, title
}) => (
  <DarkPaperComponent sx={testimonialCardStyles.root}>
    <RatingComponent sx={testimonialCardStyles.rating} value={rating} />
    <Typography
      component="h2"
      sx={testimonialCardStyles.title}
      variant="h6"
    >
      { title }
    </Typography>
    <Typography sx={testimonialCardStyles.opinion}>
      { opinion }
    </Typography>
    <ProfileCardComponent
      avatar={avatar}
      companyName={companyName}
      fullName={fullName}
    />
  </DarkPaperComponent>
);
