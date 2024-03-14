import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BookList from "./BookList";
import {deleteBook} from "../actions/booksActions";


const BookListContainer = ({books}) =>{
    const dispatch = useDispatch();

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId));
    };

    return <BookList books={books} onDelete={handleDelete}></BookList>


};

const mapStateToProps = (state) =>({
    books: state.books
});

export default connect(mapStateToProps)(BookListContainer);
