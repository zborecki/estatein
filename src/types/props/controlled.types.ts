import { Control, FieldValues, Path } from 'react-hook-form';

export interface ControlledInputComponentProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>;
  placeholder: string;
}
