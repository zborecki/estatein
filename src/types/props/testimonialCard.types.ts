import { ProfileCardComponentProps } from '#types/props/profileCard.types';

export interface TestimonialCardComponentProps extends ProfileCardComponentProps {
  opinion: string;
  rating: number;
  title: string;
}
