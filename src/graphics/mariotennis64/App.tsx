import { useRepList } from '../../hooks/useRepList';
import './App.css';

import Mario from '../../assets/character_img/Mario.png';
import Luigi from '../../assets/character_img/Luigi.png';
import Wario from '../../assets/character_img/Wario.png';
import Waluigi from '../../assets/character_img/Waluigi.png';
import Peach from '../../assets/character_img/Peach.png';
import Daisy from '../../assets/character_img/Daisy.png';
import Babymario from '../../assets/character_img/Babymario.png';
import Toad from '../../assets/character_img/Toad.png';
import Yoshi from '../../assets/character_img/Yoshi.png';
import Birdo from '../../assets/character_img/Birdo.png';
import DK from '../../assets/character_img/DK.png';
import Bowser from '../../assets/character_img/Bowser.png';
import Paratroopa from '../../assets/character_img/Paratroopa.png';
import Boo from '../../assets/character_img/Boo.png';
import DKJR from '../../assets/character_img/DKJR.png';
import Shyguy from '../../assets/character_img/Shyguy.png';

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

  const characterList = [
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

  function CharacterIcon(Character: string | undefined) {
    switch (Character) {
      case 'Mario':
        return Mario;
      case 'Luigi':
        return Luigi;
      case 'Wario':
        return Wario;
      case 'Waluigi':
        return Waluigi;
      case 'Peach':
        return Peach;
      case 'Daisy':
        return Daisy;
      case 'Babymario':
        return Babymario;
      case 'Toad':
        return Toad;
      case 'Yoshi':
        return Yoshi;
      case 'Birdo':
        return Birdo;
      case 'DK':
        return DK;
      case 'Bowser':
        return Bowser;
      case 'Paratroopa':
        return Paratroopa;
      case 'Boo':
        return Boo;
      case 'DKJR':
        return DKJR;
      case 'Shyguy':
        return Shyguy;
      default:
        return;
    }
  }

  const result1p = characterList.find(({ label }) => label === repCharacterSelect1p);
  const result2p = characterList.find(({ label }) => label === repCharacterSelect2p);

  const characterIcon1p = CharacterIcon(result1p?.value);
  const characterIcon2p = CharacterIcon(result2p?.value);

  return (
    <>
      <div className="wrapper">
        <div className="character">
          <img className="character-1p" src={characterIcon1p} alt="" />
          <img className="character-2p" src={characterIcon2p} alt="" />
        </div>
        <div className="match-info">
          <div className="name-1p player-names">{repPlayer1p}</div>
          <div className="score-1p score" color="url(#paint0_linear_10_76)">
            {repGameCount1p}
          </div>
          <div className="info">
            <div className="round">{repRoundInfo}</div>
            <div className="best-of">{repBestOfInfo}</div>
          </div>
          <div className="score-2p score" color="url(#paint0_linear_10_76)">
            {repGameCount2p}
          </div>
          <div className="name-2p player-names">{repPlayer2p}</div>
        </div>
      </div>
    </>
  );
}

export default App;
