import { Stack } from '@mui/material';
import { Buttons } from './button';
import { useReplicant } from '../hooks/useReplicant';

// type Props = {
//   id: string;
//   label: string;
//   variant: TextFieldVariants | undefined;
//   width: number;
//   size: 'small' | 'medium' | undefined;
//   value?: string;
// };

export function ButtonSubmitReset() {
  // const [setInfoText] = React.useState('');

  const [, setBestOfInfo] = useReplicant('bestOfInfo');
  const [, setTournamentInfo] = useReplicant('tournamentInfo');
  const [, setRoundInfo] = useReplicant('roundInfo');
  const [, setPlayer1p] = useReplicant('playerName1p');
  const [, setPlayer2p] = useReplicant('playerName2p');
  const [, setCharacterSelect1p] = useReplicant('characterInfo1p');
  const [, setCharacterSelect2p] = useReplicant('characterInfo2p');
  const [, setGameCount1p] = useReplicant('gameCount1p');
  const [, setGameCount2p] = useReplicant('gameCount2p');

  const bestOfInfo = document.getElementById('bestOfInfo') as HTMLInputElement;
  const tournamentInfo = document.getElementById('tournamentInfo') as HTMLInputElement;
  const roundInfo = document.getElementById('roundInfo') as HTMLInputElement;
  const player1P = document.getElementById('player1P') as HTMLInputElement;
  const player2P = document.getElementById('player2P') as HTMLInputElement;
  const characterSelect1P = document.getElementById('characterSelect1P') as HTMLInputElement;
  const characterSelect2P = document.getElementById('characterSelect2P') as HTMLInputElement;
  const gameCount1p = document.getElementById('gameCount1p') as HTMLInputElement;
  const gameCount2p = document.getElementById('gameCount2p') as HTMLInputElement;

  const submit = () => {
    setBestOfInfo(bestOfInfo.value);
    setTournamentInfo(tournamentInfo.value);
    setRoundInfo(roundInfo.value);
    setPlayer1p(player1P.value);
    setPlayer2p(player2P.value);
    setCharacterSelect1p(characterSelect1P.value);
    setCharacterSelect2p(characterSelect2P.value);
    setGameCount1p(gameCount1p.value);
    setGameCount2p(gameCount2p.value);
  };

  const reset = () => {
    bestOfInfo.value = '';
    tournamentInfo.value = '';
    roundInfo.value = '';
    player1P.value = '';
    player2P.value = '';
    characterSelect1P.value = '';
    characterSelect2P.value = '';
    gameCount1p.value = 0;
    gameCount2p.value = 0;
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Buttons variant="contained" text="submit" color="primary" width={300} onClick={submit} />
        <Buttons variant="outlined" text="reset" color="error" width={150} onClick={reset} />
      </Stack>
    </>
  );
}
