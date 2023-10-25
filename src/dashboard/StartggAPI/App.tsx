// import './App.css';
// import { Buttons } from '../../components/button';
// import { Stack, TextField } from '@mui/material';
// import StreamQueueTable from '../../components/StreamQueueTable';
// import { useStartggTable } from '../../hooks/StartggAPI/useStartggTable';
// import { useScoreboardInfo } from '../../hooks/useScoreboard';

// export function StartggAPI() {
//   const {
//     handleFetchData,
//     handleGetStreamQueue,
//     // handleRowClick,
//     url,
//     setUrl,
//     // errorMessage,
//     // setErrorMessage,
//     streamQueue,
//     // setStreamQueue,
//     selectedRowId,
//     setSelectedRowId,
//   } = useStartggTable();

//   const { scoreboardInfo, setScoreboardInfo } = useScoreboardInfo();

//   const handleRowClick = async (row: any) => {
//     // こちらは仮のデータマッピングです。実際のデータ構造に合わせて調整が必要かもしれません。
//     setScoreboardInfo((prev) => ({
//       ...prev,
//       Player1: {
//         name: row.p1.playerName,
//         prefix: row.p1.team || '', // こちらも適切なフィールド名に変更してください
//         xID: row.p1.xID || '@', // TwitterIDがxIDに変更されたとのこと
//         score: row.p1.score || 0,
//       },
//       Player2: {
//         name: row.p2.playerName,
//         prefix: row.p2.team || '', // こちらも適切なフィールド名に変更してください
//         xID: row.p2.xID || '@', // TwitterIDがxIDに変更されたとのこと
//         score: row.p2.score || 0,
//       },
//       RoundInfo: row.roundText,
//     }));
//   };

//   return (
//     <>
//       <div>
//         <Stack spacing={2}>
//           <p>トーナメントURLを入力してください</p>
//           <p>ex. https://www.start.gg/tournament/~~~</p>
//           <TextField
//             id="url"
//             label="Start.GG URL"
//             variant="standard"
//             value={url}
//             sx={{ width: 500 }}
//             onChange={(e) => setUrl(e.target.value)} // URLの状態を更新
//           />
//         </Stack>
//         <Stack direction="row" spacing={2}>
//           <Buttons
//             variant="contained"
//             text="大会情報を取得"
//             color="secondary"
//             width={150}
//             onClick={handleFetchData}
//           />
//         </Stack>
//         <Buttons
//           variant="contained"
//           text="ラウンド情報を更新する"
//           color="primary"
//           width={400}
//           onClick={handleGetStreamQueue}
//         />
//       </div>
//       <TextField
//         variant="outlined"
//         size="small"
//         value={scoreboardInfo.RoundInfo}
//         sx={{ width: 300 }}
//       />

//       {/* {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
//       <StreamQueueTable
//         streamQueue={streamQueue}
//         selectedRowId={selectedRowId}
//         handleRowClick={handleRowClick}
//         setSelectedRowId={setSelectedRowId}
//       />
//     </>
//   );
// }
