const initialState = {
    books: [],
    isEmpty: true,
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, {...action.payload, id: state.books.length + 1, rating: 0}],
                isEmpty: false,
            };

        case 'DELETE_BOOK':
            const updatedBooks = state.books.filter(book => book.id !== action.payload);     
            return {
                ...state,
                books: updatedBooks,
                isEmpty: updatedBooks.length === 0,
            };

        case 'SORT_BOOKS':
            return {
                ...state,
                books: [...state.books].sort((a, b) => {
                    const titleA = typeof a.title === 'string' ? a.title : '';
                    const titleB = typeof b.title === 'string' ? b.title : '';
                    return titleA.localeCompare(titleB);
                }),
            };

        case 'SET_BOOK_RATING':
            return {
                ...state,
                books: state.books.map(book => 
                    book.id === action.payload.id ? {...book, rating: action.payload.rating} : book
                )
            };

        default:
            return state;
    }
};

export default booksReducer;