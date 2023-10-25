import { FC } from 'react';
import {
  Table,
  Box,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio,
  Snackbar,
  Alert,
} from '@mui/material';

interface StreamQueueTableProps {
  submitOpen: boolean;
  handleSubmitClose: (
    _event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string
  ) => void;
  streamQueue: any[];
  selectedRowId: number | null;
  handleRowClick: (row: any) => void;
  setSelectedRowId: (id: number | null) => void;
}

const StreamQueueTable: FC<StreamQueueTableProps> = ({
  submitOpen,
  handleSubmitClose,
  streamQueue,
  selectedRowId,
  handleRowClick,
  setSelectedRowId,
}) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        {/* 更新した時のスナックバー */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={submitOpen}
          autoHideDuration={2000}
          onClose={handleSubmitClose}
        >
          <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
            StateGGの対戦表を更新しました！
          </Alert>
        </Snackbar>

        <TableContainer sx={{ maxWidth: 780, maxHeight: 490 }} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell> {/* ラジオボタンのための列 */}
                <TableCell>Round Text</TableCell>
                <TableCell>Player 1</TableCell>
                <TableCell>Player 2</TableCell>
                <TableCell>Stream Name</TableCell>
                <TableCell>State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {streamQueue.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => {
                    handleRowClick(row);
                    setSelectedRowId(row.id);
                  }}
                >
                  <TableCell padding="checkbox">
                    <Radio
                      checked={selectedRowId === row.id}
                      onChange={() => {
                        handleRowClick(row);
                        setSelectedRowId(row.id);
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.roundText}</TableCell>
                  <TableCell>{row.p1.playerName}</TableCell>
                  <TableCell>{row.p2.playerName}</TableCell>
                  <TableCell>{row.streamName}</TableCell>
                  <TableCell>{row.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default StreamQueueTable;
