import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Website Frame label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Website Frame/i);
  expect(linkElement).toBeInTheDocument();
});
