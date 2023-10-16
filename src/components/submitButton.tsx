import { Alert, Button, Snackbar, Stack } from '@mui/material';
import { Buttons } from './button';
import { Dispatch, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useRepList } from '../hooks/useRepList';

type Props = {
  // Score
  stateScore1p: number;
  setStateScore1p: Dispatch<React.SetStateAction<number>>;
  stateScore2p: number;
  setStateScore2p: Dispatch<React.SetStateAction<number>>;
  scoreReset: () => void;

  // Player
  statePlayer1p: string;
  setStatePlayer1p: Dispatch<React.SetStateAction<string>>;
  statePlayer2p: string;
  setStatePlayer2p: Dispatch<React.SetStateAction<string>>;
  playerReset: () => void;

  // Character
  stateCharacter1P: string;
  setStateCharacter1P: Dispatch<React.SetStateAction<string>>;
  stateCharacter2P: string;
  setStateCharacter2P: Dispatch<React.SetStateAction<string>>;
  characterReset: () => void;

  // Round
  stateRoundInfo: string;
  setStateRoundInfo: Dispatch<React.SetStateAction<string>>;
  roundReset: () => void;

  // BestOfInfo
  stateBestOfInfo: string;
  setStateBestOfInfo: Dispatch<React.SetStateAction<string>>;
};

export function ButtonSubmitReset({
  // Score
  stateScore1p,
  setStateScore1p,
  stateScore2p,
  setStateScore2p,
  scoreReset,

  // Player
  statePlayer1p,
  setStatePlayer1p,
  statePlayer2p,
  setStatePlayer2p,
  playerReset,

  // Character
  stateCharacter1P,
  setStateCharacter1P,
  stateCharacter2P,
  setStateCharacter2P,
  characterReset,

  // Round
  stateRoundInfo,
  setStateRoundInfo,
  roundReset,

  // BestOfInfo
  stateBestOfInfo,
  setStateBestOfInfo,
}: Props) {
  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);
  const handleSubmitClose = (
    _event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string
  ) => {
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

  const {
    repBestOfInfo,
    setRepBestOfInfo,
    // repTournamentInfo,
    // setRepTournamentInfo,
    repRoundInfo,
    setRepRoundInfo,
    repPlayer1p,
    setRepPlayer1p,
    repPlayer2p,
    setRepPlayer2p,
    repCharacterSelect1p,
    setRepCharacterSelect1p,
    repCharacterSelect2p,
    setRepCharacterSelect2p,
    repGameCount1p,
    setRepGameCount1p,
    repGameCount2p,
    setRepGameCount2p,
  } = useRepList();

  const submit = () => {
    // setRepTournamentInfo(tournamentInfo.value);
    setRepBestOfInfo(stateBestOfInfo);
    setRepRoundInfo(stateRoundInfo);
    setRepPlayer1p(statePlayer1p);
    setRepPlayer2p(statePlayer2p);
    setRepCharacterSelect1p(stateCharacter1P);
    setRepCharacterSelect2p(stateCharacter2P);
    setRepGameCount1p(stateScore1p);
    setRepGameCount2p(stateScore2p);
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  };

  const reset = () => {
    playerReset();
    characterReset();
    scoreReset();
    roundReset();
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const restore = () => {
    setStatePlayer1p(repPlayer1p as string);
    setStatePlayer2p(repPlayer2p as string);
    setStateCharacter1P(repCharacterSelect1p as string);
    setStateCharacter2P(repCharacterSelect2p as string);
    setStateRoundInfo(repRoundInfo as string);
    setStateBestOfInfo(repBestOfInfo as string);
    setStateScore1p(repGameCount1p as number);
    setStateScore2p(repGameCount2p as number);
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
        <Buttons variant="text" text="restore" color="primary" width={150} onClick={restore} />
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
