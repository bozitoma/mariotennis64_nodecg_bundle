// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618

import { useState } from "react";
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300]
  }
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200]
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300]
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500]
    },
    "& input": {
      textAlign: "center",
      width: 60,
      color: blueGrey[700]
    }
  }
});

export function Counter() {
  const [count, setCount] = useState(0);
  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Math.max(Number(event.target.value), 0));
  };
  return (
    <Container>
      <ButtonGroup>
        <StyledButton
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 0}
        >
          <RemoveIcon fontSize="small" />
        </StyledButton>
        <StyledInput size="small" onChange={handleChange} value={count} />
        <StyledButton
          onClick={() => setCount((prev) => prev + 1)}
          disabled={count === 3}
        >
          <AddIcon fontSize="small" />
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
