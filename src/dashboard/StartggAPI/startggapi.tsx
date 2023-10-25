import './startggapi.css';
import CachedIcon from '@mui/icons-material/Cached';
import { Box, Button, Paper, Stack, TextField, styled } from '@mui/material';
import StreamQueueTable from '../../components/StreamQueueTable';
import { useStartggTable } from '../../hooks/StartggAPI/useStartggTable';
import { Scoreboard } from '../../types/scoreboard';
import { ChangeEventHandler, Dispatch, MouseEventHandler, ReactEventHandler } from 'react';

type Props = {
  scoreboardInfo: Scoreboard;
  setScoreboardInfo: Dispatch<React.SetStateAction<Scoreboard>>;
  playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  playerNameSwap: MouseEventHandler<HTMLButtonElement>;
  roundSelect: ReactEventHandler<HTMLDivElement>;
  roundReset: () => void;
};

export function StartggAPI({ setScoreboardInfo }: Props) {
  const {
    handleGetStreamQueue,
    url,
    setUrl,
    streamQueue,
    selectedRowId,
    setSelectedRowId,
    submitOpen,
    handleSubmitClose,
  } = useStartggTable();

  const handleRowClick = async (row: any) => {
    // こちらは仮のデータマッピングです。実際のデータ構造に合わせて調整が必要かもしれません。
    setScoreboardInfo((prev) => ({
      ...prev,
      Player1: {
        name: row.p1.playerName,
        prefix: row.p1.team || '', // こちらも適切なフィールド名に変更してください
        xID: row.p1.xID || '@', // TwitterIDがxIDに変更されたとのこと
        score: row.p1.score || 0,
      },
      Player2: {
        name: row.p2.playerName,
        prefix: row.p2.team || '', // こちらも適切なフィールド名に変更してください
        xID: row.p2.xID || '@', // TwitterIDがxIDに変更されたとのこと
        score: row.p2.score || 0,
      },
      RoundInfo: row.roundText,
    }));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
    width: 780,
  }));

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2 }}>
      <Stack spacing={2}>
        <Item>Start.GG Tournament URL</Item>
        <Stack spacing={2} direction="row">
          <TextField
            id="url"
            label="Start.GG URL"
            variant="outlined"
            size="small"
            value={url}
            sx={{ width: 580 }}
            onChange={(e) => setUrl(e.target.value)} // URLの状態を更新
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<CachedIcon />}
            sx={{ width: 200 }}
            onClick={handleGetStreamQueue}
            size="small"
          >
            UPDATE
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <StreamQueueTable
          submitOpen={submitOpen}
          handleSubmitClose={handleSubmitClose}
          streamQueue={streamQueue}
          selectedRowId={selectedRowId}
          handleRowClick={handleRowClick}
          setSelectedRowId={setSelectedRowId}
        />
      </Stack>
    </Box>
  );
}
