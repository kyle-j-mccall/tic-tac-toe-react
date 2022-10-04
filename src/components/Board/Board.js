import React from 'react';
import Box from '../Box/Box';
import './Board.css';

export default function Board() {
  return (
    <div>
      <div className='board'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
