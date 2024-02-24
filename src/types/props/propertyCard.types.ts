import { SlugProps } from '#types/props/common.types';

export interface PropertyCardActionModuleProps extends SlugProps {
  acronym: string;
  price: number;
}

export interface PropertyCardComponentProps
  extends PropertyCardActionModuleProps, PropertyCardBodyModuleProps {
  location: string;
  image: string;
}

export interface PropertyCardBodyModuleProps extends SlugProps {
  description: string;
  title: string;
}
