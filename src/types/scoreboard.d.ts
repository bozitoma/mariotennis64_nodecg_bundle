export interface Scoreboard {
  id?: number;
  Player1: Playerscore;
  Player2: Playerscore;
  RoundInfo: string;
}
export interface Playerscore {
  prefix: string;
  name: string;
  score: number;
  xID: string;
}
