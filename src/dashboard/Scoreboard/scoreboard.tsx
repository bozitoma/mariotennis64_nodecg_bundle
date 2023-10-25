import { ButtonSubmitReset } from '../../components/submitButton';
import { CharacterInfoSwap } from '../../components/characterInfo';
import { ScoreCounter } from '../../components/counter';
import { BestOfInfo } from '../../components/bestOfInfo';
import { RoundInfo } from '../../components/roundInfo';
import { Box, Paper, Stack, styled } from '@mui/material';
import { PlayerInfoSwap } from '../../components/playerInfo';
import './scoreboard.css';
import { useBestOfInfo, useCharacterInfo, useScore } from '../../hooks/useScoreboard';
import { ChangeEventHandler, Dispatch, MouseEventHandler, ReactEventHandler } from 'react';
import { Scoreboard } from '../../types/scoreboard';

type Props = {
  scoreboardInfo: Scoreboard;
  setScoreboardInfo: Dispatch<React.SetStateAction<Scoreboard>>;
  playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  playerNameSwap: MouseEventHandler<HTMLButtonElement>;
  roundSelect: ReactEventHandler<HTMLDivElement>;
  roundReset: () => void;
};

export function Scoreboard({
  scoreboardInfo,
  setScoreboardInfo,
  playerNameEdit,
  playerNameSwap,
  roundSelect,
  roundReset,
}: Props) {
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

  const {
    alignment,
    setAlignment,
    stateBestOfInfo,
    setStateBestOfInfo,
    handleButtonChange,
    handleTextChange,
  } = useBestOfInfo();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
    width: 660,
  }));

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2 }}>
      <Stack justifyContent="center" spacing={2}>
        <Item>Scoreboard Editor</Item>
        <Stack spacing={2}>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <RoundInfo roundText={scoreboardInfo.RoundInfo} roundSelect={roundSelect} />
            <BestOfInfo
              alignment={alignment}
              setAlignment={setAlignment}
              stateBestOfInfo={stateBestOfInfo}
              handleButtonChange={handleButtonChange}
              handleTextChange={handleTextChange}
            />
            {/* <TounamentInfo /> */}
          </Stack>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <CharacterInfoSwap
              stateCharacter1P={stateCharacter1P}
              stateCharacter2P={stateCharacter2P}
              choseCharacter1p={choseCharacter1p}
              choseCharacter2p={choseCharacter2p}
              characterSwap={characterSwap}
            />
          </Stack>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <PlayerInfoSwap
              player1={scoreboardInfo.Player1.name}
              player2={scoreboardInfo.Player2.name}
              playerNameEdit={playerNameEdit}
              playerNameSwap={playerNameSwap}
            />
          </Stack>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <ScoreCounter
              stateScore1p={stateScore1p}
              stateScore2p={stateScore2p}
              setStateScore1p={setStateScore1p}
              setStateScore2p={setStateScore2p}
              scoreReset={scoreReset}
            />
          </Stack>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <ButtonSubmitReset
              // Score
              stateScore1p={stateScore1p}
              stateScore2p={stateScore2p}
              setStateScore1p={setStateScore1p}
              setStateScore2p={setStateScore2p}
              scoreReset={scoreReset}
              // Player
              player1={scoreboardInfo.Player1.name}
              player2={scoreboardInfo.Player2.name}
              setScoreboardInfo={setScoreboardInfo}
              // Character
              stateCharacter1P={stateCharacter1P}
              stateCharacter2P={stateCharacter2P}
              setStateCharacter1P={setStateCharacter1P}
              setStateCharacter2P={setStateCharacter2P}
              characterReset={characterReset}
              // Round
              roundText={scoreboardInfo.RoundInfo}
              roundReset={roundReset}
              // BestOfInfo
              stateBestOfInfo={stateBestOfInfo}
              setStateBestOfInfo={setStateBestOfInfo}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
