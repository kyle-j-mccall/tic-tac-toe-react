import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';
import './Board.css';

export default function Board() {
  const { board, winner, disableSpaceOnWin } = useContext(GameContext);

  const className = disableSpaceOnWin(winner);

  return (
    <div>
      <div className={`${className} board`}>
        {board.map((cell) => {
          return <Box key={cell.space} space={cell.space} content={cell.content} />;
        })}
      </div>
    </div>
  );
}
