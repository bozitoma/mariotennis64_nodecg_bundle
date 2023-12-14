// Replicantsの型を定義
export interface ReplicantMap {
  playerName1p: string;
  playerName2p: string;
  gameCount1p: number;
  gameCount2p: number;
  roundInfo: string;
  bestOfInfo: string;
  tournamentInfo: string;
  characterInfo1p: string; //キャラを選択する配列があればそれを指定して良いかも
  characterInfo2p: string;
  time: string | null;
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  playerName1p: '',
  playerName2p: '',
  gameCount1p: 0,
  gameCount2p: 0,
  roundInfo: '',
  bestOfInfo: '',
  tournamentInfo: '',
  characterInfo1p: '',
  characterInfo2p: '',
  time: '00:00',
};
