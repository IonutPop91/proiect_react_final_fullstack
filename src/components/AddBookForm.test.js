import { render, fireEvent } from '@testing-library/react';
import AddBookForm from './AddBookForm';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

test('renders Add Book Form correctly', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <AddBookForm />
    </Provider>
  );

  const titleInput = getByLabelText(/Title:/i);
  const authorInput = getByLabelText(/Author:/i);
  const addButton = getByText(/Add Book/i);

  expect(titleInput).toBeInTheDocument();
  expect(authorInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('submits the form correctly', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <AddBookForm />
    </Provider>
  );

  const titleInput = getByLabelText(/Title:/i);
  const authorInput = getByLabelText(/Author:/i);
  const addButton = getByText(/Add Book/i);

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(authorInput, { target: { value: 'Test Author' } });
  fireEvent.click(addButton);

  expect(titleInput.value).toBe('');
  expect(authorInput.value).toBe('');
});