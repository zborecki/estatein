import { FilledInputProps, InputProps, OutlinedInputProps } from '@mui/material';

import { ControlledInputComponentProps } from '#types/props/controlled.types';

export interface TextFieldComponentsProps<T extends object>
  extends ControlledInputComponentProps<T> {
  fullWidth?: boolean;
  inputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>
}
