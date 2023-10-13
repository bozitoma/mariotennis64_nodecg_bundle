import { ButtonSubmitReset } from '../components/submitButton';
import { CharacterInfoSwap } from '../components/characterInfo';
import { Counter } from '../components/counter';
import { BestOfInfo } from '../components/bestOfInfo';
import { RoundInfo } from '../components/roundInfo';
import { Stack } from '@mui/material';
import { PlayerInfoSwap } from '../components/playerInfo';
import './App.css';
import {
  useBestOfInfo,
  useCharacterInfo,
  usePlayerInfo,
  useRoundInfo,
  useScore,
} from '../hooks/useScoreboard';
import { TounamentInfo } from '../components/tournamentInfo';

function App() {
  const { statePlayer1p, statePlayer2p, playerName1p, playerName2p, playerSwap, playerReset } =
    usePlayerInfo();

  const {
    character1P,
    character2P,
    choseCharacter1p,
    choseCharacter2p,
    characterSwap,
    characterReset,
  } = useCharacterInfo();

  const { count1P, count2P, setCount1p, setCount2p, score1P, score2P, scoreReset } = useScore();

  const { alignment, setInfoText, handleButtonChange, handleTextChange, bestOfInfoReset } =
    useBestOfInfo();

  const { stateRound, selectRound, roundReset } = useRoundInfo();

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <RoundInfo stateRound={stateRound} selectRound={selectRound} />
          <BestOfInfo
            alignment={alignment}
            setInfoText={setInfoText}
            handleButtonChange={handleButtonChange}
            handleTextChange={handleTextChange}
          />
          <TounamentInfo />
        </Stack>
        <Stack direction="row" spacing={2}>
          <CharacterInfoSwap
            character1P={character1P}
            character2P={character2P}
            choseCharacter1p={choseCharacter1p}
            choseCharacter2p={choseCharacter2p}
            characterSwap={characterSwap}
          />
        </Stack>
        <PlayerInfoSwap
          statePlayer1p={statePlayer1p}
          statePlayer2p={statePlayer2p}
          playerName1p={playerName1p}
          playerName2p={playerName2p}
          playerSwap={playerSwap}
        />
        <Stack spacing={2}>
          <Counter
            count1P={count1P}
            count2P={count2P}
            setCount1p={setCount1p}
            setCount2p={setCount2p}
            score1P={score1P}
            score2P={score2P}
            scoreReset={scoreReset}
          />
        </Stack>
        <ButtonSubmitReset
          playerReset={playerReset}
          characterReset={characterReset}
          scoreReset={scoreReset}
          bestOfInfoReset={bestOfInfoReset}
          roundReset={roundReset}
        />
      </Stack>
    </>
  );
}

export default App;
