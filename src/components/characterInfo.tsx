import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SwapButtons } from './button';
import { MouseEventHandler } from 'react';

type Props = {
  id?: string;
  label?: string;
  value?: string;
  onSelect?: MouseEventHandler<HTMLDivElement> | undefined;
  stateCharacter1P?: string;
  stateCharacter2P?: string;
  choseCharacter1p?: MouseEventHandler<HTMLDivElement>;
  choseCharacter2p?: MouseEventHandler<HTMLDivElement>;
  characterSwap?: () => void;
};

export function CharacterInfo({ id, label, value, onSelect }: Props) {
  return (
    <>
      <Autocomplete
        disablePortal
        id={id}
        options={characterIcon.map((option) => option.label)}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{ width: 302 }}
        size="small"
        value={value}
        onSelect={onSelect}
      />
    </>
  );
}

export function CharacterInfoSwap({
  stateCharacter1P,
  stateCharacter2P,
  choseCharacter1p,
  choseCharacter2p,
  characterSwap,
}: Props) {
  return (
    <>
      <CharacterInfo
        id="characterSelect1P"
        label="1P Character"
        value={stateCharacter1P}
        onSelect={choseCharacter1p}
      />
      <SwapButtons onClick={characterSwap} />
      <CharacterInfo
        id="characterSelect2P"
        label="2P Character"
        value={stateCharacter2P}
        onSelect={choseCharacter2p}
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
  { label: 'ヘイホー', value: 'shyguy' },
];
