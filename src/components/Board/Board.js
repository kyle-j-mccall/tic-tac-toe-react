import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';
import './Board.css';

export default function Board() {
  const { board, currentPlayer, setCurrentPlayer, setBoard } = useContext(GameContext);

  return (
    <div>
      <div className="board">
        {board.map((cell) => {
          return <Box key={cell.space} space={cell.space} content={cell.content} />;
        })}
      </div>
    </div>
  );
}
