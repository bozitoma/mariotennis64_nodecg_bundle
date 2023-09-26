import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack, TextField } from '@mui/material';
import { WinnersList } from './winnersList';

export function RoundSelect() {
  const [alignment, setAlignment] = React.useState('');
  const [roundInfoText, setRoundInfoText] = React.useState('');
  const [showWinnersRound, setShowWinnersRound] = React.useState(false);

  const bracketHandleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);

    // (event.target as HTMLButtonElement)
    // →ボタンを操作したことで得たターゲットであることを型（HTMLButtonElement）として定義してる
    if ((event.target as HTMLButtonElement).value === roundInfoText) {
      setRoundInfoText('');
    } else {
      setRoundInfoText((event.target as HTMLButtonElement).value)
    }

    if ((event.target as HTMLButtonElement).value === "Winners") {
      setShowWinnersRound(!showWinnersRound);
    }
  };

  return (
    <>
      <Stack spacing={1}>
        <TextField
          id="roundInfo"
          label="Round"
          variant="outlined"
          size='small'
          value={roundInfoText}
          sx={{ width: 300 }}
        />
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={alignment} // 選択中のボタンを取得
          exclusive // 一度に1つのボタンのみを選択する属性
          onChange={bracketHandleChange} // クリック時の挙動
          aria-label="Platform"
        >
          <ToggleButton value="Winners">Winners</ToggleButton>
          <ToggleButton value="Losers">Losers</ToggleButton>
          <ToggleButton value="Grand">Grand</ToggleButton>
        </ToggleButtonGroup>
        {showWinnersRound ? <WinnersList /> : null}
      </Stack>
    </>
  );
}
