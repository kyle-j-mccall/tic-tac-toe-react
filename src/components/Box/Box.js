import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Box.css';

export default function Box({ space, content }) {
  const { currentPlayer, setCurrentPlayer, board, setBoard, message, setMessage, displayMove } =
    useContext(GameContext);

  // const clickHandler = () => {
  //   if (currentPlayer === 'X') {
  //     setBoard((prevState) =>
  //       prevState.map(({ space }) => ({
  //         space: space,
  //         content: currentPlayer,
  //       }))
  //     );

  //     setCurrentPlayer('O');
  //   }
  // };

  console.log('contenttt', board);

  return (
    <div className="cell" value={space} onClick={() => displayMove(space)}>
      <p>{content}</p>
    </div>
  );
}
