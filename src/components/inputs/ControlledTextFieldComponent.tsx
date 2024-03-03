import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { TextFieldComponentsProps } from '#types/props/controlledTextField.types';

export const ControlledTextFieldComponent = <T extends object>({
  control, fullWidth, inputProps, name, placeholder
}: TextFieldComponentsProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        error={!!error}
        fullWidth={fullWidth}
        helperText={error?.message ?? ' '}
        InputProps={inputProps}
        placeholder={placeholder}
      />
    )}
  />
  );
