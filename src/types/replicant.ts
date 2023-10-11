// Replicantsの型を定義
export interface ReplicantMap {
  playerName1p: string;
  playerName2p: string;
  gameCount1p: string; //表示する上では文字列で問題ない、numberだと型定義がめんどくさそう
  gameCount2p: string; //表示する上では文字列で問題ない、numberだと型定義がめんどくさそう
  roundInfo: string;
  bestOfInfo: string;
  tournamentInfo: string;
  characterInfo1p: string; //キャラを選択する配列があればそれを指定して良いかも
  characterInfo2p: string;
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  playerName1p: '',
  playerName2p: '',
  gameCount1p: '0',
  gameCount2p: '0',
  roundInfo: '',
  bestOfInfo: '',
  tournamentInfo: '',
  characterInfo1p: '',
  characterInfo2p: '',
};
