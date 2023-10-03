import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
  variant: 'contained' | 'outlined';
  text: string;
  color: 'primary' | 'error' | 'inherit' | 'secondary' | 'info' | 'success' | 'warning';
  url?: string;
  width: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Buttons({ variant, text, color, url, width, onClick }: Props) {
  return (
    <>
      <Button
        variant={variant}
        onClick={onClick}
        color={color}
        href={url}
        sx={{ width: { width } }}
      >
        {text}
      </Button>
    </>
  );
}
