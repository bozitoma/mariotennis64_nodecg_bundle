import { useRepList } from '../../hooks/useRepList';
import './App.css';

function App() {
  const { repBestOfInfo, repRoundInfo, repPlayer1p, repPlayer2p, repGameCount1p, repGameCount2p } =
    useRepList();

  return (
    <>
      <div className="wrapper">
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
