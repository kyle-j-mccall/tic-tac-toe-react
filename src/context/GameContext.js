import { createContext, useState } from 'react';
import boardState from '../boardObj';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState("X's turn");
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(boardState);
  const [content, setContent] = useState('');

  const displayMove = (space) => {
    const moveX = {
      content: 'X',
      space: space,
    };

    const moveO = {
      content: 'O',
      space: space,
    };

    if (currentPlayer === 'X') {
      setBoard((prevState) => prevState.map((cell) => (cell.space === space ? moveX : cell)));
      setCurrentPlayer('O');
    } else {
      setBoard((prevState) => prevState.map((cell) => (cell.space === space ? moveO : cell)));
      setCurrentPlayer('X');
    }
  };

  const gameState = {
    currentPlayer,
    setCurrentPlayer,
    message,
    setMessage,
    active,
    setActive,
    board,
    setBoard,
    content,
    setContent,
    displayMove,
  };

  return <GameContext.Provider value={{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
