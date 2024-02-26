import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { TextFieldComponentsProps } from '#types/props/controlledTextField.types';

export const ControlledTextFieldComponent = <T extends object>({
  control, fullWidth, inputProps, name, placeholder
}: TextFieldComponentsProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <TextField
        {...field}
        fullWidth={fullWidth}
        InputProps={inputProps}
        placeholder={placeholder}
      />
    )}
  />
  );
