import { ReactEventHandler, useState } from 'react';

export const useCharacterInfo = () => {
  const [stateCharacter1P, setStateCharacter1P] = useState('');
  const [stateCharacter2P, setStateCharacter2P] = useState('');

  const choseCharacter1p: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateCharacter1P(event.target.value);
  };

  const choseCharacter2p: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateCharacter2P(event.target.value);
  };

  const characterReset = () => {
    setStateCharacter1P('');
    setStateCharacter2P('');
  };

  const characterSwap = () => {
    setStateCharacter1P(stateCharacter2P);
    setStateCharacter2P(stateCharacter1P);
  };

  return {
    stateCharacter1P,
    setStateCharacter1P,
    stateCharacter2P,
    setStateCharacter2P,
    choseCharacter1p,
    choseCharacter2p,
    characterSwap,
    characterReset,
  };
};

export const usePlayerInfo = () => {
  const [statePlayer1p, setStatePlayer1p] = useState('');
  const [statePlayer2p, setStatePlayer2p] = useState('');

  const playerName1p: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStatePlayer1p(event.target.value);
  };

  const playerName2p: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStatePlayer2p(event.target.value);
  };

  const playerReset = () => {
    setStatePlayer1p('');
    setStatePlayer2p('');
  };

  const playerSwap = () => {
    setStatePlayer1p(statePlayer2p);
    setStatePlayer2p(statePlayer1p);
  };

  return {
    statePlayer1p,
    setStatePlayer1p,
    statePlayer2p,
    setStatePlayer2p,
    playerName1p,
    playerName2p,
    playerSwap,
    playerReset,
  };
};

export const useScore = () => {
  const [stateScore1p, setStateScore1p] = useState(0);
  const [stateScore2p, setStateScore2p] = useState(0);

  const scoreReset = () => {
    setStateScore1p(0);
    setStateScore2p(0);
  };

  return {
    stateScore1p,
    stateScore2p,
    setStateScore1p,
    setStateScore2p,
    scoreReset,
  };
};

export const useBestOfInfo = () => {
  const [alignment, setAlignment] = useState('');
  const [stateBestOfInfo, setStateBestOfInfo] = useState('');

  const handleButtonChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);

    // (event.target as HTMLButtonElement)
    // →ボタンを操作したことで得たターゲットであることを型（HTMLButtonElement）として定義してる
    if ((event.target as HTMLButtonElement).value === stateBestOfInfo) {
      setStateBestOfInfo('');
    } else {
      setStateBestOfInfo((event.target as HTMLButtonElement).value);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStateBestOfInfo((event.target as HTMLButtonElement).value);
  };

  const bestOfInfoReset = () => {
    setStateBestOfInfo('');
  };

  return {
    alignment,
    setAlignment,
    stateBestOfInfo,
    setStateBestOfInfo,
    handleButtonChange,
    handleTextChange,
    bestOfInfoReset,
  };
};

export const useRoundInfo = () => {
  const [stateRoundInfo, setStateRoundInfo] = useState('');

  const selectRound: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateRoundInfo(event.target.value);
  };

  const roundReset = () => {
    setStateRoundInfo('');
  };

  return {
    stateRoundInfo,
    setStateRoundInfo,
    selectRound,
    roundReset,
  };
};
