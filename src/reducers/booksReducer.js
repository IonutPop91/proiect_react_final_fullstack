const initialState={
    books: [],
    isEmpty: true,
};

const booksReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return{
                books: [...state.books, {...action.payload, id:state.books.length + 1}],
                isEmpty: false,
            };

            case 'DELETE_BOOK':
               const updatedBooks = state.books.filter(book => book.id !== action.payload);     
               return {
                        books: updatedBooks,
                        isEmpty: updatedBooks.length === 0,
                    };

                    case 'SORT_BOOKS':
                        return {
                            books: [...state.books].sort((a, b) => {
                                const titleA = typeof a.title === 'string' ? a.title : '';
                                const titleB = typeof b.title === 'string' ? b.title : '';
                                return titleA.localeCompare(titleB);
                              }),
                        };
        default:
            return state;
    }
};

export default booksReducer; 