import { createContext, useState } from 'react';
import boardState from '../boardObj';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState('Your Turn X');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(boardState);
  const [winner, setWinner] = useState('');

  const disableSpace = (content) => {
    let className = '';
    if (content !== '') {
      className = 'disabled';
    }
    return className;
  };
  const disableSpaceOnWin = (winner) => {
    let className = '';
    if (winner) {
      className = 'disabled';
    }
    return className;
  };

  const displayMove = (space) => {
    const move = {
      content: currentPlayer,
      space: space,
    };

    if (currentPlayer === 'X') {
      setBoard((prevState) => prevState.map((cell) => (cell.space === space ? move : cell)));
      setCurrentPlayer('O');
      setMessage('Your turn O');
    } else {
      setBoard((prevState) => prevState.map((cell) => (cell.space === space ? move : cell)));
      setCurrentPlayer('X');
      setMessage('Your turn X');
    }
  };

  const checkWinX = () => {
    if (!active) return;
    if (board[0].content === 'X' && board[1].content === 'X' && board[2].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[3].content === 'X' && board[4].content === 'X' && board[5].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[6].content === 'X' && board[7].content === 'X' && board[8].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[0].content === 'X' && board[3].content === 'X' && board[6].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[1].content === 'X' && board[4].content === 'X' && board[7].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[2].content === 'X' && board[5].content === 'X' && board[8].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[0].content === 'X' && board[4].content === 'X' && board[8].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else if (board[2].content === 'X' && board[4].content === 'X' && board[6].content === 'X') {
      setWinner('X');
      setActive(false);
      setMessage('X wins');
    } else {
      checkCatsGame();
    }
  };

  const checkWinO = () => {
    if (!active) return;

    if (board[0].content === 'O' && board[1].content === 'O' && board[2].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[3].content === 'O' && board[4].content === 'O' && board[5].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[6].content === 'O' && board[7].content === 'O' && board[8].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[0].content === 'O' && board[3].content === 'O' && board[6].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[1].content === 'O' && board[4].content === 'O' && board[7].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[2].content === 'O' && board[5].content === 'O' && board[8].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[0].content === 'O' && board[4].content === 'O' && board[8].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else if (board[2].content === 'O' && board[4].content === 'O' && board[6].content === 'O') {
      setWinner('O');
      setActive(false);
      setMessage('O wins');
    } else {
      checkCatsGame();
    }
  };

  const checkCatsGame = () => {
    return board.filter((box) => box.content === '').length === 0;
  };

  const gameState = {
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    message,
    setMessage,
    active,
    setActive,
    board,
    setBoard,
    displayMove,
    disableSpace,
    disableSpaceOnWin,
  };

  checkWinO();
  checkWinX();
  checkCatsGame();

  return <GameContext.Provider value={{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
