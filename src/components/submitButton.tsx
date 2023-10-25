import { Alert, Button, Snackbar, Stack } from '@mui/material';
import { Dispatch, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useRepList } from '../hooks/useRepList';
import { Scoreboard } from '../types/scoreboard';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';

type Props = {
  // Score
  stateScore1p: number;
  setStateScore1p: Dispatch<React.SetStateAction<number>>;
  stateScore2p: number;
  setStateScore2p: Dispatch<React.SetStateAction<number>>;
  scoreReset: () => void;

  // Player
  player1: string;
  player2: string;
  setScoreboardInfo: Dispatch<React.SetStateAction<Scoreboard>>;
  // playerNameReset: () => void;

  // Character
  stateCharacter1P: string;
  setStateCharacter1P: Dispatch<React.SetStateAction<string>>;
  stateCharacter2P: string;
  setStateCharacter2P: Dispatch<React.SetStateAction<string>>;
  characterReset: () => void;

  // Round
  roundText: string;
  roundReset: () => void;

  // BestOfInfo
  stateBestOfInfo: string;
  setStateBestOfInfo: Dispatch<React.SetStateAction<string>>;
};

export const ButtonSubmitReset = ({
  // Score
  stateScore1p,
  setStateScore1p,
  stateScore2p,
  setStateScore2p,
  scoreReset,

  // Player
  player1,
  player2,
  setScoreboardInfo,

  //  Character
  stateCharacter1P,
  setStateCharacter1P,
  stateCharacter2P,
  setStateCharacter2P,
  characterReset,

  // Round
  roundText,

  // BestOfInfo
  stateBestOfInfo,
  setStateBestOfInfo,
}: Props) => {
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
    setRepBestOfInfo(stateBestOfInfo);
    setRepRoundInfo(roundText);
    setRepPlayer1p(player1);
    setRepPlayer2p(player2);
    setRepCharacterSelect1p(stateCharacter1P);
    setRepCharacterSelect2p(stateCharacter2P);
    setRepGameCount1p(stateScore1p);
    setRepGameCount2p(stateScore2p);
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  };

  const reset = () => {
    setScoreboardInfo((prev: any) => ({
      ...prev,
      Player1: {
        ...prev.Player1,
        name: '',
      },
      Player2: {
        ...prev.Player2,
        name: '',
      },
      RoundInfo: '',
    }));
    characterReset();
    scoreReset();
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const restore = () => {
    setScoreboardInfo((prev: any) => ({
      ...prev,
      Player1: {
        ...prev.Player1,
        name: repPlayer1p as string,
      },
      Player2: {
        ...prev.Player2,
        name: repPlayer2p as string,
      },
      RoundInfo: repRoundInfo as string,
    }));

    setStateCharacter1P(repCharacterSelect1p as string);
    setStateCharacter2P(repCharacterSelect2p as string);
    setStateBestOfInfo(repBestOfInfo as string);
    setStateScore1p(repGameCount1p as number);
    setStateScore2p(repGameCount2p as number);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          sx={{ width: 330 }}
          onClick={submit}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ width: 150 }}
          onClick={handleResetOpen}
        >
          RESET
        </Button>
        <Button
          variant="text"
          color="primary"
          startIcon={<ReplayIcon />}
          sx={{ width: 150 }}
          onClick={restore}
        >
          RESTORE
        </Button>
      </Stack>

      {/* Submitのスナックバー */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={submitOpen}
        autoHideDuration={2000}
        onClose={handleSubmitClose}
      >
        <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
          スコアボードを更新しました！
        </Alert>
      </Snackbar>

      {/* Reset完了のスナックバー */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={resetCompleteOpen}
        autoHideDuration={2000}
        onClose={handleResetCompleteClose}
      >
        <Alert onClose={handleResetCompleteClose} severity="success" sx={{ width: '100%' }}>
          スコアボードをリセットしました！
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
};
