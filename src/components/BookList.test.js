import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

const mockBooks = [
  { id: 1, title: 'Test Book 1', author: 'Test Author 1' },
  { id: 2, title: 'Test Book 2', author: 'Test Author 2' },
];

test('renders Book List correctly', () => {
  render(
    <Provider store={store}>
      <BookList />
    </Provider>
  );

  const title1 = screen.getByText('Test Book 1 by Test Author 1');
  const title2 = screen.getByText('Test Book 2 by Test Author 2');

  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
});

test('deletes a book correctly', () => {
  render(
    <Provider store={store}>
      <BookList />
    </Provider>
  );

  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Test Book 1 by Test Author 1')).not.toBeInTheDocument();
});