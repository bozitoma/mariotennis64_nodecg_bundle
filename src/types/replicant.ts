// Replicantsの型を定義
export interface ReplicantMap {
  playerName: string;
  gameCount: number;
  roundInfo: string;
  bestOfInfo: string;
  tournamentInfo: string;
  characterInfo: string; //キャラを選択する配列があればそれを指定して良いかも
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  playerName: '',
  gameCount: 0,
  roundInfo: '',
  bestOfInfo: '',
  tournamentInfo: '',
  characterInfo: '',
};
