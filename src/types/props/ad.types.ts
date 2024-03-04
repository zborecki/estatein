import { Information, Link } from '#types/atoms.types';

export type Ad = Information & {
  button?: Link;
};

export interface AdComponentProps extends Ad {

}
