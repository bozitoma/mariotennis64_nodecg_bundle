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

  const swap = () => {
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
    swap,
  };
};

export const usePlayerInfo = () => {
  const [player1P, setPlayer1P] = useState('');
  const [player2P, setPlayer2P] = useState('');

  const playerName1p = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPlayer1P((event.target as HTMLButtonElement).value);
  };

  const playerName2p = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPlayer2P((event.target as HTMLButtonElement).value);
  };

  const swap = () => {
    setPlayer1P(player2P);
    setPlayer2P(player1P);
  };

  return {
    player1P,
    player2P,
    playerName1p,
    playerName2p,
    swap,
  };
};
