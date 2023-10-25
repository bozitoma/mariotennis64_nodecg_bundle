// import { ButtonSubmitReset } from '../../components/submitButton';
// import { CharacterInfoSwap } from '../../components/characterInfo';
// import { ScoreCounter } from '../../components/counter';
// import { BestOfInfo } from '../../components/bestOfInfo';
// import { RoundInfo } from '../../components/roundInfo';
// import { Stack } from '@mui/material';
// import { PlayerInfoSwap } from '../../components/playerInfo';
// import './App.css';
// import {
//   useBestOfInfo,
//   useCharacterInfo,
//   // usePlayerInfo,
//   // useRoundInfo,
//   useScore,
//   useScoreboardInfo,
// } from '../../hooks/useScoreboard';

// export function Scoreboard() {
//   const {
//     scoreboardInfo,
//     setScoreboardInfo,
//     playerNameEdit,
//     // playerNameReset,
//     playerNameSwap,
//     roundSelect,
//     roundReset,
//   } = useScoreboardInfo();

//   // const {
//   //   statePlayer1p,
//   //   setStatePlayer1p,
//   //   statePlayer2p,
//   //   setStatePlayer2p,
//   //   playerName1p,
//   //   playerName2p,
//   //   playerSwap,
//   //   playerReset,
//   // } = usePlayerInfo();

//   const {
//     stateCharacter1P,
//     setStateCharacter1P,
//     stateCharacter2P,
//     setStateCharacter2P,
//     choseCharacter1p,
//     choseCharacter2p,
//     characterSwap,
//     characterReset,
//   } = useCharacterInfo();

//   const { stateScore1p, setStateScore1p, stateScore2p, setStateScore2p, scoreReset } = useScore();

//   const {
//     alignment,
//     setAlignment,
//     stateBestOfInfo,
//     setStateBestOfInfo,
//     handleButtonChange,
//     handleTextChange,
//   } = useBestOfInfo();

//   // const { stateRoundInfo, setStateRoundInfo, selectRound, roundReset } = useRoundInfo();

//   return (
//     <>
//       <Stack spacing={2}>
//         <Stack direction="row" spacing={2}>
//           <RoundInfo roundText={scoreboardInfo.RoundInfo} roundSelect={roundSelect} />
//           <BestOfInfo
//             alignment={alignment}
//             setAlignment={setAlignment}
//             stateBestOfInfo={stateBestOfInfo}
//             handleButtonChange={handleButtonChange}
//             handleTextChange={handleTextChange}
//           />
//           {/* <TounamentInfo /> */}
//         </Stack>
//         <Stack direction="row" spacing={2}>
//           <CharacterInfoSwap
//             stateCharacter1P={stateCharacter1P}
//             stateCharacter2P={stateCharacter2P}
//             choseCharacter1p={choseCharacter1p}
//             choseCharacter2p={choseCharacter2p}
//             characterSwap={characterSwap}
//           />
//         </Stack>
//         <PlayerInfoSwap
//           player1={scoreboardInfo.Player1.name}
//           player2={scoreboardInfo.Player2.name}
//           // 「() =>」 を使って型エラーを解決 https://qiita.com/tak001/items/748f02e41f8a47d3ebb2
//           playerNameEdit={() => playerNameEdit}
//           playerNameSwap={() => playerNameSwap}
//         />
//         <Stack spacing={2}>
//           <ScoreCounter
//             stateScore1p={stateScore1p}
//             stateScore2p={stateScore2p}
//             setStateScore1p={setStateScore1p}
//             setStateScore2p={setStateScore2p}
//             scoreReset={scoreReset}
//           />
//         </Stack>
//         <ButtonSubmitReset
//           // Score
//           stateScore1p={stateScore1p}
//           stateScore2p={stateScore2p}
//           setStateScore1p={setStateScore1p}
//           setStateScore2p={setStateScore2p}
//           scoreReset={scoreReset}
//           // Player
//           player1={scoreboardInfo.Player1.name}
//           player2={scoreboardInfo.Player2.name}
//           setScoreboardInfo={setScoreboardInfo}
//           // playerNameReset={playerNameReset}
//           // Character
//           stateCharacter1P={stateCharacter1P}
//           stateCharacter2P={stateCharacter2P}
//           setStateCharacter1P={setStateCharacter1P}
//           setStateCharacter2P={setStateCharacter2P}
//           characterReset={characterReset}
//           // Round
//           roundText={scoreboardInfo.RoundInfo}
//           // setStateRoundInfo={setStateRoundInfo}
//           roundReset={roundReset}
//           // BestOfInfo
//           stateBestOfInfo={stateBestOfInfo}
//           setStateBestOfInfo={setStateBestOfInfo}
//         />
//       </Stack>
//     </>
//   );
// }
