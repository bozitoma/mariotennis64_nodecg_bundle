import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

export function RoundInfo() {
  return (
    <Stack spacing={2} sx={{ width: 440 }}>
      <Autocomplete
        id="roundInfoText"
        freeSolo
        options={roundList.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Round" />}
        size="small"
      />
    </Stack>
  );
}

const roundList = [
  'Winners',
  'Winners TOP',
  'Winners Round',
  'Winners Quarter',
  'Winners Semi',
  'Winners Final',
  'Winners',
  'Winners TOP',
  'Winners Round',
  'Winners Quarter',
  'Winners Semi',
  'Winners Final',
  'Grand Final',
  'Grand Final Set2',
  'Pools',
  'Round',
  'Brackets',
  'TOP',
  'Quarter-Final',
  'Semi-Final',
  'Final',
  'Friendly',
];
