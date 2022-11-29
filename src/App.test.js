import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Production Site URL label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Production Site URL/i);
  expect(linkElement).toBeInTheDocument();
});
