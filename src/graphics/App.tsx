// import { useCharacterInfo } from '../hooks/useCharacterIcon';
import { useReplicant } from '../hooks/useReplicant';

function App() {
  // const { icon } = useCharacterInfo();

  const [bestOfInfo] = useReplicant('bestOfInfo');
  const [tournamentInfo] = useReplicant('tournamentInfo');
  const [roundInfo] = useReplicant('roundInfo');
  const [player1p] = useReplicant('playerName1p');
  const [player2p] = useReplicant('playerName2p');
  const [characterSelect1p] = useReplicant('characterInfo1p');
  const [characterSelect2p] = useReplicant('characterInfo2p');
  const [gameCount1p] = useReplicant('gameCount1p');
  const [gameCount2p] = useReplicant('gameCount2p');

  const characterIcon = [
    { label: 'マリオ', value: 'Mario' },
    { label: 'ルイージ', value: 'Luigi' },
    { label: 'ワリオ', value: 'Wario' },
    { label: 'ワルイージ', value: 'Waluigi' },
    { label: 'ピーチ', value: 'Peach' },
    { label: 'デイジー', value: 'Daisy' },
    { label: 'ベビィマリオ', value: 'Babymario' },
    { label: 'キノピオ', value: 'Toad' },
    { label: 'ヨッシー', value: 'Yoshi' },
    { label: 'キャサリン', value: 'Birdo' },
    { label: 'ドンキーコング', value: 'DK' },
    { label: 'クッパ', value: 'Bowser' },
    { label: 'パタパタ', value: 'Paratroopa' },
    { label: 'テレサ', value: 'Boo' },
    { label: 'ドンキーコングJr.', value: 'DKJR' },
    { label: 'ヘイホー', value: 'Shyguy' },
  ];

  const result1p = characterIcon.find(({ label }) => label === characterSelect1p);
  const result2p = characterIcon.find(({ label }) => label === characterSelect2p);

  // const characterIcon1p = `../assets/characterIcon/${result?.value}MT.png`; `../public/images/${result?.value}MT.png`

  // console.log(icon); // { name: 'cherries', quantity: 5 }
  const characterIcon1p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result1p?.value}MT.png`;
  const characterIcon2p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result2p?.value}MT.png`;

  return (
    <>
      <div>{bestOfInfo}</div>
      <div>{tournamentInfo}</div>
      <div>{roundInfo}</div>
      <div>{player1p}</div>
      <div>{player2p}</div>
      <img src={characterIcon1p} alt="" />
      <img src={characterIcon2p} alt="" />
      <div>{characterSelect1p}</div>
      <div>{characterSelect2p}</div>
      <div>{gameCount1p}</div>
      <div>{gameCount2p}</div>
    </>
  );
}

export default App;
