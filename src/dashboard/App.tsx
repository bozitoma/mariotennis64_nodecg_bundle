import { ButtonSubmitReset } from '../components/submitButton';
import { CharacterInfoSwap } from '../components/characterInfo';
import { ScoreCounter } from '../components/counter';
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
import { Status } from '../components/Status';

function App() {
  const {
    statePlayer1p,
    setStatePlayer1p,
    statePlayer2p,
    setStatePlayer2p,
    playerName1p,
    playerName2p,
    playerSwap,
    playerReset,
  } = usePlayerInfo();

  const {
    stateCharacter1P,
    setStateCharacter1P,
    stateCharacter2P,
    setStateCharacter2P,
    choseCharacter1p,
    choseCharacter2p,
    characterSwap,
    characterReset,
  } = useCharacterInfo();

  const { stateScore1p, setStateScore1p, stateScore2p, setStateScore2p, scoreReset } = useScore();

  const { alignment, stateBestOfInfo, setStateBestOfInfo, handleButtonChange, handleTextChange } =
    useBestOfInfo();

  const { stateRoundInfo, setStateRoundInfo, selectRound, roundReset } = useRoundInfo();

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <RoundInfo stateRoundInfo={stateRoundInfo} selectRound={selectRound} />
          <BestOfInfo
            alignment={alignment}
            stateBestOfInfo={stateBestOfInfo}
            handleButtonChange={handleButtonChange}
            handleTextChange={handleTextChange}
          />
          {/* <TounamentInfo /> */}
        </Stack>
        <Stack direction="row" spacing={2}>
          <CharacterInfoSwap
            stateCharacter1P={stateCharacter1P}
            stateCharacter2P={stateCharacter2P}
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
          <ScoreCounter
            stateScore1p={stateScore1p}
            stateScore2p={stateScore2p}
            setStateScore1p={setStateScore1p}
            setStateScore2p={setStateScore2p}
            scoreReset={scoreReset}
          />
        </Stack>
        <ButtonSubmitReset
          // Score
          stateScore1p={stateScore1p}
          stateScore2p={stateScore2p}
          setStateScore1p={setStateScore1p}
          setStateScore2p={setStateScore2p}
          scoreReset={scoreReset}
          // Player
          statePlayer1p={statePlayer1p}
          statePlayer2p={statePlayer2p}
          setStatePlayer1p={setStatePlayer1p}
          setStatePlayer2p={setStatePlayer2p}
          playerReset={playerReset}
          // Character
          stateCharacter1P={stateCharacter1P}
          stateCharacter2P={stateCharacter2P}
          setStateCharacter1P={setStateCharacter1P}
          setStateCharacter2P={setStateCharacter2P}
          characterReset={characterReset}
          // Round
          stateRoundInfo={stateRoundInfo}
          setStateRoundInfo={setStateRoundInfo}
          roundReset={roundReset}
          // BestOfInfo
          stateBestOfInfo={stateBestOfInfo}
          setStateBestOfInfo={setStateBestOfInfo}
        />
      </Stack>
      <Status />
    </>
  );
}

export default App;
