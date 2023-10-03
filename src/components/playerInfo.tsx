import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

type Props = {
  id: string;
  label: string;
};

export function PlayerInfo({ id, label }: Props) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id={id}
        freeSolo
        options={playerList.map((option) => option)}
        renderInput={(params) => <TextField {...params} label={label} />}
        size="small"
      />
    </Stack>
  );
}

const playerList = ['Zackray', 'Abadango', 'Nietono', 'Atushi of the World'];
