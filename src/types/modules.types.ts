import { Information, Link, Location } from '#types/atoms.types';
import { ImageResponse } from '#types/graphql/common.types';

export interface Notification {
  button?: Link
  message: string;
}

export interface Property extends Information {
  images: ImageResponse[];
  location: Location;
  price: number;
  slug: string;
}
