import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { SwapButtons } from './button';
import { ChangeEventHandler, MouseEventHandler } from 'react';

type Props = {
  id?: string;
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  player1?: string | undefined;
  player2?: string | undefined;
  playerNameEdit?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  playerNameSwap?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function PlayerInfo({ id, label, value, onChange }: Props) {
  return (
    <>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
        sx={{ width: 302 }}
      />
    </>
  );
}

export function PlayerInfoSwap({ player1, player2, playerNameEdit, playerNameSwap }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <PlayerInfo id="player1" label="1P Player Name" value={player1} onChange={playerNameEdit} />
      <SwapButtons onClick={playerNameSwap} />
      <PlayerInfo id="player2" label="2P Player Name" value={player2} onChange={playerNameEdit} />
    </Stack>
  );
}
