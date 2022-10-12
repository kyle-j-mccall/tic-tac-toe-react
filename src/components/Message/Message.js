import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Message.css';

export default function Message() {
  const { message, handleReset } = useContext(GameContext);

  return (
    <div className="message-container">
      <h3>{message}</h3>
      <button className="reset-btn" onClick={handleReset}>
        Reset game
      </button>
    </div>
  );
}
