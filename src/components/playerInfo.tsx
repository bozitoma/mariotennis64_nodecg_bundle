import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { SwapButtons } from './button';
import { MouseEventHandler } from 'react';
import { usePlayerInfo } from '../hooks/useScoreboard';
// import { useReplicant } from '../hooks/useReplicant';

type Props = {
  id: string;
  label: string;
  value: string;
  onSelect?: MouseEventHandler<HTMLDivElement> | undefined;
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

export function PlayerInfoSwap() {
  const { player1P, player2P, playerName1p, playerName2p, swap } = usePlayerInfo();

  return (
    <Stack direction="row" spacing={2}>
      <PlayerInfo id="player1P" label="1P Player Name" value={player1P} onSelect={playerName1p} />
      <SwapButtons onClick={swap} />
      <PlayerInfo id="player2P" label="2P Player Name" value={player2P} onSelect={playerName2p} />
    </Stack>
  );
}

const playerList = ['Zackray', 'Abadango', 'Nietono', 'Atushi of the World'];
