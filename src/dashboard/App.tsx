import { Stack } from '@mui/material';
import { useScoreboardInfo } from '../hooks/useScoreboard';
import './App.css';
import { Scoreboard } from './Scoreboard/scoreboard';
import { StartggAPI } from './StartggAPI/startggapi';
import { Status } from './Status/status';

export function App() {
  const {
    scoreboardInfo,
    setScoreboardInfo,
    playerNameEdit,
    playerNameSwap,
    roundSelect,
    roundReset,
  } = useScoreboardInfo();

  return (
    <>
      <Stack spacing={2} direction="row">
        <Stack spacing={2}>
          <Status />
          <Scoreboard
            scoreboardInfo={scoreboardInfo}
            setScoreboardInfo={setScoreboardInfo}
            playerNameEdit={playerNameEdit}
            playerNameSwap={playerNameSwap}
            roundSelect={roundSelect}
            roundReset={roundReset}
          />
        </Stack>
        <StartggAPI
          scoreboardInfo={scoreboardInfo}
          setScoreboardInfo={setScoreboardInfo}
          playerNameEdit={playerNameEdit}
          playerNameSwap={playerNameSwap}
          roundSelect={roundSelect}
          roundReset={roundReset}
        />
      </Stack>
    </>
  );
}
