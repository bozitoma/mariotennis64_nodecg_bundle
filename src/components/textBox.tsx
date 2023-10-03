import * as React from 'react';
import TextField, { TextFieldVariants } from '@mui/material/TextField';

type Props = {
  id: string;
  label: string;
  variant: TextFieldVariants | undefined;
};

export function TextBox({ id, label, variant }: Props) {
  return (
    <>
      <TextField id={id} label={label} variant={variant} />
    </>
  );
}
