import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { sortBooks, deleteBook } from "../actions/booksActions";
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const BookList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(state => state.books);
    const isEmpty = useSelector(state => state.isEmpty);

    const handleSortBooks = () => {
        dispatch(sortBooks());
    };

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId));
        
        if(books.length === 1) {
            navigate("/addbooks");
        }
    };

    
  
  
    return (
        <div className="container mt-5">
      <h2 className="text-center">Book List</h2>
      <Button className="mb-3" variant="primary" onClick={handleSortBooks}>
        Sort Books
      </Button>
      <ListGroup className="mx-auto" style={{ maxWidth: "400px" }}>
        {books.map((book) => (
          <ListGroup.Item key={book.id} className="d-flex justify-content-between align-items-center">
            {book.title} by {book.author}
            <Button
              className="btn-danger btn-sm"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
    
    const mapStateToProps = (state) => ({
      books: state.books,
    });
    
    export default connect(mapStateToProps)(BookList);