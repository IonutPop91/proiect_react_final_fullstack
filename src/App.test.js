import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Online Library link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Online Library/i);
  expect(linkElement).toBeInTheDocument();
});
