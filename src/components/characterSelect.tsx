import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {
  id: string
  label: string
}

export function CharacterSelects({ id, label }: Props) {
  return (
    <>
      <Autocomplete
        disablePortal
        id={id}
        options={characterIcon.map((option) => option.label)}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{ width: 300 }}
      />
    </>
  );
}

const characterIcon = [
  { label: 'マリオ', value: 'mario' },
  { label: 'ルイージ', value: 'luigi' },
  { label: 'ワリオ', value: 'wario' },
  { label: 'ワルイージ', value: 'waluigi' },
  { label: 'ピーチ', value: 'peach' },
  { label: 'デイジー', value: 'daisy' },
  { label: 'ベビィマリオ', value: 'babymario' },
  { label: 'キノピオ', value: 'toad' },
  { label: 'ヨッシー', value: 'yoshi' },
  { label: 'キャサリン', value: 'birdo' },
  { label: 'ドンキーコング', value: 'dk' },
  { label: 'クッパ', value: 'bowser' },
  { label: 'パタパタ', value: 'paratroopa' },
  { label: 'テレサ', value: 'boo' },
  { label: 'ドンキーコングJr.', value: 'dkjr' },
  { label: 'ヘイホー', value: 'shyguy' }
]

