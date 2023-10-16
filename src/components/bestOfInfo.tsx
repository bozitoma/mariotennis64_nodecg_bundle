import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack, TextField } from '@mui/material';

type Props = {
  alignment: string;
  stateBestOfInfo: string;
  handleButtonChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function BestOfInfo({
  alignment,
  stateBestOfInfo,
  handleButtonChange,
  handleTextChange,
}: Props) {
  return (
    <>
      <Stack spacing={1} direction="row">
        <TextField
          id="bestOfInfo"
          label="Best of"
          variant="outlined"
          size="small"
          value={stateBestOfInfo}
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
