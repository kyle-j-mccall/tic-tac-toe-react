import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Box.css';

export default function Box({ space, content }) {
  const { displayMove, checkWinX, checkWinO, setActive, disableSpace } = useContext(GameContext);

  const className = disableSpace(content);

  return (
    <div
      className={`${className} cell`}
      onClick={() => {
        displayMove(space);
        setActive(false);
        disableSpace(content);
        checkWinX();
        checkWinO();
      }}
    >
      <p>{content}</p>
    </div>
  );
}
