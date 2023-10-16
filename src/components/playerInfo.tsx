import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { SwapButtons } from './button';
import { MouseEventHandler, ReactEventHandler } from 'react';

type Props = {
  id?: string;
  label?: string;
  value?: string;
  onSelect?: MouseEventHandler<HTMLDivElement> | undefined;
  statePlayer1p?: string;
  statePlayer2p?: string;
  playerName1p?: ReactEventHandler<HTMLDivElement>;
  playerName2p?: ReactEventHandler<HTMLDivElement>;
  playerSwap?: () => void;
};

export function PlayerInfo({ id, label, value, onSelect }: Props) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id={id}
        freeSolo
        options={playerList.map((option) => option)}
        renderInput={(params) => <TextField {...params} label={label} />}
        size="small"
        onSelect={onSelect}
        value={value}
      />
    </Stack>
  );
}

export function PlayerInfoSwap({
  statePlayer1p,
  statePlayer2p,
  playerName1p,
  playerName2p,
  playerSwap,
}: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <PlayerInfo
        id="player1P"
        label="1P Player Name"
        value={statePlayer1p}
        onSelect={playerName1p}
      />
      <SwapButtons onClick={playerSwap} />
      <PlayerInfo
        id="player2P"
        label="2P Player Name"
        value={statePlayer2p}
        onSelect={playerName2p}
      />
    </Stack>
  );
}

const playerList = ['Zackray', 'Abadango', 'Nietono', 'Atsushi of the World'];
