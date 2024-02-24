import {
  IconButton, InputAdornment, TextField
} from '@mui/material';
import {
  Control, Controller, FieldValues, Path
} from 'react-hook-form';

import { AddEmailIcon } from '#assets/icons/AddEmailIcon';
import { SendIcon } from '#assets/icons/SendIcon';

interface ControlledInputComponentProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>;
}

export const ControlledInputComponent = <T extends object>({
  control, name
}: ControlledInputComponentProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <TextField
        {...field}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddEmailIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  ':hover': {
                    '& .MuiSvgIcon-root': {
                      path: {
                        fill: ({ palette: { primary } }) => primary.main
                      }
                    }
                  }
                }}
                type="submit"
              >
                <SendIcon
                  sx={{
                    '&.MuiSvgIcon-root': {
                      path: {
                        fill: ({ palette: { common } }) => common.white
                      }
                    }
                  }}
                />
              </IconButton>
            </InputAdornment>
          )
        }}
        placeholder="E-mail"
      />
    )}
  />
  );
