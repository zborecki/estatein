import {
  Information, Link, Location, SocialType
} from '#types/atoms.types';
import { ImageResponse } from '#types/graphql/common.types';

export interface FAQ {
  answer: string;
  question: string;
}

export interface Notification {
  button?: Link;
  message: string;
}

export interface Property extends Information {
  currency: string;
  images: ImageResponse[];
  location: Location;
  price: number;
  slug: string;
}

export interface Social {
  type: SocialType;
  url: string;
}
