// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618

import * as React from 'react';
import { useState } from 'react';
import { ButtonGroup, Button, TextField, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ClearButtons } from './button';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  '&:hover': {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 0,
      borderColor: blueGrey[200],
    },
    '&:hover fieldset': {
      borderColor: blueGrey[300],
    },
    '&.Mui-focused fieldset': {
      borderColor: blueGrey[500],
    },
    '& input': {
      textAlign: 'center',
      width: 60,
      color: blueGrey[700],
    },
  },
});

export function Counter() {
  const [count1P, setCount1p] = useState(0);
  const [count2P, setCount2p] = useState(0);

  const score1P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount1p(Math.max(Number(event.target.value), 0));
  };

  const score2P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount2p(Math.max(Number(event.target.value), 0));
  };

  const onClick = () => {
    setCount1p(0);
    setCount2p(0);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <ButtonGroup>
          <StyledInput size="small" onChange={score1P} value={count1P} />
          <StyledButton onClick={() => setCount1p((prev) => prev - 1)} disabled={count1P === 0}>
            <RemoveIcon fontSize="small" />
          </StyledButton>
          <StyledButton onClick={() => setCount1p((prev) => prev + 1)} disabled={count1P === 3}>
            <AddIcon fontSize="small" />
          </StyledButton>
        </ButtonGroup>
        <ClearButtons onClick={onClick} />
        <ButtonGroup>
          <StyledButton onClick={() => setCount2p((prev) => prev + 1)} disabled={count2P === 3}>
            <AddIcon fontSize="small" />
          </StyledButton>
          <StyledButton onClick={() => setCount2p((prev) => prev - 1)} disabled={count2P === 0}>
            <RemoveIcon fontSize="small" />
          </StyledButton>
          <StyledInput size="small" onChange={score2P} value={count2P} />
        </ButtonGroup>
      </Stack>
    </>
  );
}
