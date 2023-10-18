import { Button, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRepList } from '../../hooks/useRepList';
import './App.css';
import Add from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

function App() {
  const {
    repBestOfInfo,
    repRoundInfo,
    repPlayer1p,
    repPlayer2p,
    repCharacterSelect1p,
    repCharacterSelect2p,
    repGameCount1p,
    setRepGameCount1p,
    repGameCount2p,
    setRepGameCount2p,
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

  const result1p = characterList.find(({ label }) => label === repCharacterSelect1p);
  const result2p = characterList.find(({ label }) => label === repCharacterSelect2p);

  const characterIcon1p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result1p?.value}MT.png`;
  const characterIcon2p = `https://aimfortheace0622.com/wp-content/uploads/2023/10/${result2p?.value}MT.png`;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  }));

  // カウントアップボタンのロジック
  const handleChange1P = () => {
    const score = repGameCount1p;
    if (typeof score === 'number') {
      setRepGameCount1p(score + 1);
    }
  };

  const handleChange2P = () => {
    const score = repGameCount2p;
    if (typeof score === 'number') {
      setRepGameCount2p(score + 1);
    }
  };

  const [disable1p, setDisable1p] = useState(false);
  const [disable2p, setDisable2p] = useState(false);

  useEffect(() => {
    if (typeof repGameCount1p === 'number') {
      if (repBestOfInfo === 'Best of 5' && repGameCount1p > 2) {
        setDisable1p(true);
      } else if (repBestOfInfo === 'Best of 3' && repGameCount1p > 1) {
        setDisable1p(true);
      } else if (repBestOfInfo === 'Best of 1' && repGameCount1p > 0) {
        setDisable1p(true);
      } else {
        setDisable1p(false);
      }
    }

    if (typeof repGameCount2p === 'number') {
      if (repBestOfInfo === 'Best of 5' && repGameCount2p > 2) {
        setDisable2p(true);
      } else if (repBestOfInfo === 'Best of 3' && repGameCount2p > 1) {
        setDisable2p(true);
      } else if (repBestOfInfo === 'Best of 1' && repGameCount2p > 0) {
        setDisable2p(true);
      } else {
        setDisable2p(false);
      }
    }
    return;
  }, [repBestOfInfo, repGameCount1p, repGameCount2p]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Item>
            <div>---{repRoundInfo}---</div>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <div>---{repBestOfInfo}---</div>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <div className="player-info player1p-info">
              <div>{repPlayer1p}</div>
              <img className="icon character1p" src={characterIcon1p} alt="" />
              <div className="score">{repGameCount1p}</div>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ width: 150 }}
                onClick={handleChange1P}
                disabled={disable1p}
              />
            </div>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <div className="player-info player2p-info">
              <div>{repPlayer2p}</div>
              <img className="icon character2p" src={characterIcon2p} alt="" />
              <div className="score">{repGameCount2p}</div>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ width: 150 }}
                onClick={handleChange2P}
                disabled={disable2p}
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
