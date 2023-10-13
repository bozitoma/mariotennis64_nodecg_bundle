import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack, TextField } from '@mui/material';
// import { useState } from 'react';

export function BestOfInfo({ alignment, setInfoText, handleButtonChange, handleTextChange }) {
  // const [alignment, setAlignment] = useState('');
  // const [setInfoText, setSetInfoText] = useState('');

  // const handleButtonChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
  //   setAlignment(newAlignment);

  //   // (event.target as HTMLButtonElement)
  //   // →ボタンを操作したことで得たターゲットであることを型（HTMLButtonElement）として定義してる
  //   if ((event.target as HTMLButtonElement).value === setInfoText) {
  //     setSetInfoText('');
  //   } else {
  //     setSetInfoText((event.target as HTMLButtonElement).value);
  //   }
  // };

  // const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setSetInfoText((event.target as HTMLButtonElement).value);
  // };

  return (
    <>
      <Stack spacing={1}>
        <TextField
          id="bestOfInfo"
          label="Best of"
          variant="outlined"
          size="small"
          value={setInfoText}
          onChange={handleTextChange}
          sx={{ width: 150 }}
        />
        <ToggleButtonGroup
          id="setInfoButton"
          color="primary"
          size="small"
          value={alignment} // 選択中のボタンを取得
          exclusive // 一度に1つのボタンのみを選択する属性
          onChange={handleButtonChange} // クリック時の挙動
          aria-label="Platform"
        >
          <ToggleButton value="Best of 1">Bo1</ToggleButton>
          <ToggleButton value="Best of 3">Bo3</ToggleButton>
          <ToggleButton value="Best of 5">Bo5</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}
