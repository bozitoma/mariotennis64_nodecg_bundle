interface APIResponse {
  // あなたのAPIレスポンスの型定義
  data: {
    tournament: {
      streamQueue: Array<{
        sets: Array<{
          slots: Array<{
            entrant: {
              participants: Array<{
                gamerTag: string;
                prefix: string;
                user: {
                  authorizations: Array<{
                    externalUsername: string;
                  }>;
                };
              }>;
              paginatedSets: {
                nodes: Array<{
                  fullRoundText: string;
                  slots: Array<{
                    entrant: {
                      name: string;
                    };
                    standing: {
                      stats: {
                        score: {
                          value: number | null;
                        };
                      };
                    };
                  }>;
                }>;
              };
            };
          }>;
        }>;
      }>;
    };
  };
}

interface TransformError {
  error: true;
  message: string;
}

type TransformResult = Scoreboard | TransformError;

interface Bracket {
  /**
   * @minItems 0
   */
  bracketData: {
    identifier: string;
    fullRoundText: string;
    player1: Bracketscore;
    player2: Bracketscore;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
interface Bracketscore {
  prefix: string;
  name: string;
  score: number;
  [k: string]: unknown;
}

type Match = {
  id: number;
  roundText: string;
  streamName: string;
  p1?: PlayerScore;
  p2?: PlayerScore;
  state: string;
};
type StreamQueue = Match[];

type PlayerScore = {
  team: string;
  playerName: string;
  score: number;
  xID: string;
};
