import { useReplicant } from './useReplicant';

export const useRepList = () => {
  const [repBestOfInfo, setRepBestOfInfo] = useReplicant('bestOfInfo');
  const [repTournamentInfo, setRepTournamentInfo] = useReplicant('tournamentInfo');
  const [repRoundInfo, setRepRoundInfo] = useReplicant('roundInfo');
  const [repPlayer1p, setRepPlayer1p] = useReplicant('playerName1p');
  const [repPlayer2p, setRepPlayer2p] = useReplicant('playerName2p');
  const [repCharacterSelect1p, setRepCharacterSelect1p] = useReplicant('characterInfo1p');
  const [repCharacterSelect2p, setRepCharacterSelect2p] = useReplicant('characterInfo2p');
  const [repGameCount1p, setRepGameCount1p] = useReplicant('gameCount1p');
  const [repGameCount2p, setRepGameCount2p] = useReplicant('gameCount2p');

  return {
    repBestOfInfo,
    setRepBestOfInfo,
    repTournamentInfo,
    setRepTournamentInfo,
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
  };
};
