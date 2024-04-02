export const addBook = (book) =>(
    {
        type: 'ADD_BOOK',
        payload: book
    }
);

export const deleteBook = (bookID) => ({
    type: 'DELETE_BOOK',
    payload: bookID,
});

export const sortBooks = () => ({
    type: 'SORT_BOOKS',
});

export const setBookRating = (id, rating) => ({
    type: 'SET_BOOK_RATING',
    payload: { id, rating }
});