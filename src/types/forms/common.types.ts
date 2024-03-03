import { AnyObject, ObjectSchema } from 'yup';

export type SchemaOf<T> = ObjectSchema<{
  [prop in keyof T]: string;
}, AnyObject, {
  [key in keyof T]: undefined;
}>;
