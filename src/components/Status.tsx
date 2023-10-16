import { Stack } from '@mui/material';
import { useRepList } from '../hooks/useRepList';

export function Status() {
  const {
    repBestOfInfo,
    repRoundInfo,
    repPlayer1p,
    repPlayer2p,
    repCharacterSelect1p,
    repCharacterSelect2p,
    repGameCount1p,
    repGameCount2p,
  } = useRepList();

  const characterIcon = [
    { label: 'マリオ', value: 'Mario' },
    { label: 'ルイージ', value: 'Luigi' },
    { label: 'ワリオ', value: 'Wario' },
    { label: 'ワルイージ', value: 'Waluigi' },
    { label: 'ピーチ', value: 'Peach' },
    { label: 'デイジー', value: 'Daisy' },
    { label: 'ベビィマリオ', value: 'Babymario' },
    { label: 'キノピオ', value: 'Toad' },
    { label: 'ヨッシー', value: 'Yoshi' },
    { label: 'キャサリン', value: 'Birdo' },
    { label: 'ドンキーコング', value: 'DK' },
    { label: 'クッパ', value: 'Bowser' },
    { label: 'パタパタ', value: 'Paratroopa' },
    { label: 'テレサ', value: 'Boo' },
    { label: 'ドンキーコングJr.', value: 'DKJR' },
    { label: 'ヘイホー', value: 'Shyguy' },
  ];

  const result1p = characterIcon.find(({ label }) => label === repCharacterSelect1p);
  const result2p = characterIcon.find(({ label }) => label === repCharacterSelect2p);

  const characterIcon1p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result1p?.value}MT.png`;
  const characterIcon2p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result2p?.value}MT.png`;

  return (
    <div style={{ color: 'black' }}>
      <h2>Tournament Info</h2>
      <Stack direction="row" spacing={2}>
        <div>{repRoundInfo}</div>
        <div>{repBestOfInfo}</div>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <div>{repPlayer1p}</div>
          <img src={characterIcon1p} alt="" />
          <div>{repGameCount1p}</div>
        </Stack>
        <Stack spacing={2}>
          <div>{repPlayer2p}</div>
          <img src={characterIcon2p} alt="" />
          <div>{repGameCount2p}</div>
        </Stack>
      </Stack>
    </div>
  );
}
