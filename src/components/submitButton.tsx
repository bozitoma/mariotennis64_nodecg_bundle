import { Alert, Button, Snackbar, Stack } from '@mui/material';
import { Buttons } from './button';
import { useReplicant } from '../hooks/useReplicant';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

// type Props = {
//   id: string;
//   label: string;
//   variant: TextFieldVariants | undefined;
//   width: number;
//   size: 'small' | 'medium' | undefined;
//   value?: string;
// };

export function ButtonSubmitReset() {
  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);
  const handleSubmitClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSubmitOpen(false);
  };

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);
  const handleResetOpen = () => {
    setResetOpen(true);
  };
  const handleResetClose = () => {
    setResetOpen(false);
  };

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);
  const handleResetCompleteClose = () => {
    setResetCompleteOpen(false);
  };

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
    setSubmitOpen(true); // Submit完了のスナックバーを表示
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
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Buttons variant="contained" text="submit" color="primary" width={300} onClick={submit} />
        <Buttons
          variant="outlined"
          text="reset"
          color="error"
          width={150}
          onClick={handleResetOpen}
        />
      </Stack>

      {/* Submitのスナックバー */}
      <Snackbar open={submitOpen} autoHideDuration={2000} onClose={handleSubmitClose}>
        <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
          Success update!
        </Alert>
      </Snackbar>

      {/* Reset完了のスナックバー */}
      <Snackbar open={resetCompleteOpen} autoHideDuration={2000} onClose={handleResetCompleteClose}>
        <Alert onClose={handleResetCompleteClose} severity="success" sx={{ width: '100%' }}>
          Success reset!
        </Alert>
      </Snackbar>

      {/* Resetのモーダル */}
      <Dialog open={resetOpen} onClose={handleResetClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{'スコアボードをリセットしますか？'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleResetClose}>キャンセル</Button>
          <Button onClick={reset} variant="contained" color="error" autoFocus>
            リセット
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
