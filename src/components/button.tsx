import Button from '@mui/material/Button';

type Props = {
  variant: "contained" | "outlined"
  text: string
  color: "primary" | "error" | "inherit" | "secondary" | "info" | "success" | "warning"
  url?: string
}

export function Buttons({ variant, text, color, url }: Props) {
  return (
    <>
      <Button variant={variant} color={color} href={url}>{text}</Button>
    </>

  )
}
