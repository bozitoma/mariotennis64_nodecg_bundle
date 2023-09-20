import { Button } from "@mui/material";

type Props = {
  text: string
  url: string
}

function Buttons({ text, url }: Props) {
  return (
    <>
      <Button variant="contained" href={url}>{text}</Button>
    </>
  )
}

export default Buttons
