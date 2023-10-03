import { Buttons, SwapButtons } from '../components/button';
import { TextBox } from '../components/textBox';
import { CharacterInfo } from '../components/characterInfo';
import { Counter } from '../components/counter';
import { BestOfInfo } from '../components/bestOfInfo';
import { RoundInfo } from '../components/roundInfo';
import { Stack } from '@mui/material';
import { PlayerInfo } from '../components/playerInfo';

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
            width={300}
            size="small"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <CharacterInfo id="characterSelect1P" label="1P Character" />
          <SwapButtons />
          <CharacterInfo id="characterSelect2P" label="2P Character" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <PlayerInfo id="player1P" label="1P Player Name" />
          <SwapButtons />
          <PlayerInfo id="player2P" label="2P Player Name" />
        </Stack>
        <Stack spacing={2}>
          <Counter />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Buttons variant="contained" text="submit" color="primary" width={300} />
          <Buttons variant="outlined" text="reset" color="error" width={150} />
        </Stack>
      </Stack>
    </>
  );
}

export default App;
