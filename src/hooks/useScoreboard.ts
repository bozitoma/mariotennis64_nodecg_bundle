import { useState } from 'react';

export const useCharacterInfo = () => {
  const [character1P, setCharacter1P] = useState('');
  const [character2P, setCharacter2P] = useState('');

  const choseCharacter1p = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter1P((event.target as HTMLButtonElement).value);
  };

  const choseCharacter2p = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter2P(event.target.value);
  };

  const characterReset = () => {
    setCharacter1P('');
    setCharacter2P('');
  };

  const characterSwap = () => {
    setCharacter1P(character2P);
    setCharacter2P(character1P);
  };

  return {
    character1P,
    setCharacter1P,
    character2P,
    setCharacter2P,
    choseCharacter1p,
    choseCharacter2p,
    characterSwap,
    characterReset,
  };
};

export const usePlayerInfo = () => {
  const [statePlayer1p, setStatePlayer1p] = useState('');
  const [statePlayer2p, setStatePlayer2p] = useState('');

  const playerName1p = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatePlayer1p((event.target as HTMLButtonElement).value);
  };

  const playerName2p = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatePlayer2p((event.target as HTMLButtonElement).value);
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
  const [count1P, setCount1p] = useState(0);
  const [count2P, setCount2p] = useState(0);

  const score1P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount1p(Math.max(Number(event.target.value), 0));
  };

  const score2P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount2p(Math.max(Number(event.target.value), 0));
  };

  const scoreReset = () => {
    setCount1p(0);
    setCount2p(0);
  };

  return {
    count1P,
    count2P,
    setCount1p,
    setCount2p,
    score1P,
    score2P,
    scoreReset,
  };
};

export const useBestOfInfo = () => {
  const [alignment, setAlignment] = useState('');
  const [setInfoText, setSetInfoText] = useState('');

  const handleButtonChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);

    // (event.target as HTMLButtonElement)
    // →ボタンを操作したことで得たターゲットであることを型（HTMLButtonElement）として定義してる
    if ((event.target as HTMLButtonElement).value === setInfoText) {
      setSetInfoText('');
    } else {
      setSetInfoText((event.target as HTMLButtonElement).value);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSetInfoText((event.target as HTMLButtonElement).value);
  };

  const bestOfInfoReset = () => {
    setSetInfoText('');
  };

  return {
    alignment,
    setAlignment,
    setInfoText,
    setSetInfoText,
    handleButtonChange,
    handleTextChange,
    bestOfInfoReset,
  };
};

export const useRoundInfo = () => {
  const [stateRound, setStateRound] = useState('');

  const selectRound = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStateRound((event.target as HTMLButtonElement).value);
  };

  const roundReset = () => {
    setStateRound('');
  };

  return {
    stateRound,
    selectRound,
    roundReset,
  };
};
