import { useRepList } from '../hooks/useRepList';
import './App.css';

function App() {
  const {
    repBestOfInfo,
    repRoundInfo,
    repPlayer1p,
    repPlayer2p,
    repCharacterSelect1p,
    repCharacterSelect2p,
    repGameCount1p,
    repGameCount2p,
  } = useRepList();

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

  const result1p = characterIcon.find(({ label }) => label === repCharacterSelect1p);
  const result2p = characterIcon.find(({ label }) => label === repCharacterSelect2p);

  const characterIcon1p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result1p?.value}.png`;
  const characterIcon2p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result2p?.value}.png`;

  return (
    <div className="mario-tennis">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="player-names">
            <div className="name-1p">{repPlayer1p}</div>
            <div className="name-2p">{repPlayer2p}</div>
          </div>
          <div className="score">
            <div className="score-1p" color="url(#paint0_linear_10_76)">
              {repGameCount1p}
            </div>
            <div className="score-2p" color="url(#paint0_linear_10_76)">
              {repGameCount2p}
            </div>
          </div>
          <div className="info">
            <div className="bestOfInfo">{repBestOfInfo}</div>
            <div className="roundInfo">{repRoundInfo}</div>
          </div>
        </div>
      </div>
      <img className="icon-1p" src={characterIcon1p} alt="" />
      <img className="icon-2p" src={characterIcon2p} alt="" />
    </div>
  );
}

export default App;
