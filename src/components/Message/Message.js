import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Message.css';

export default function Message() {
  const { message } = useContext(GameContext);

  return (
    <div className="message-container">
      <h3>{message}</h3>
    </div>
  );
}
