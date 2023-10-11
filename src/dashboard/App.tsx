import { ButtonSubmitReset } from '../components/submitButton';
import { TextBox } from '../components/textBox';
import { CharacterInfoSwap } from '../components/characterInfo';
import { Counter } from '../components/counter';
import { BestOfInfo } from '../components/bestOfInfo';
import { RoundInfo } from '../components/roundInfo';
import { Stack } from '@mui/material';
import { PlayerInfoSwap } from '../components/playerInfo';
import './App.css';

function App() {
  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <RoundInfo />
          <BestOfInfo />
          <TextBox
            id="tournamentInfo"
            label="Tournament Info"
            variant="outlined"
            width={400}
            size="small"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <CharacterInfoSwap />
        </Stack>
        <PlayerInfoSwap />
        <Stack spacing={2}>
          <Counter />
        </Stack>
        <ButtonSubmitReset />
      </Stack>
    </>
  );
}

export default App;
