import { render, screen } from '@testing-library/react';
import App from './App';

import { GameProvider } from './context/GameContext';

test('renders learn react link', () => {
  render(<GameProvider><App/></GameProvider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
