import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Box.css';

export default function Box({ space, content }) {
  const { displayMove, disableSpace } = useContext(GameContext);

  const className = disableSpace(content);

  return (
    <div
      className={`${className} cell`}
      onClick={() => {
        displayMove(space);

        disableSpace(content);
      }}
    >
      <p>{content}</p>
    </div>
  );
}
