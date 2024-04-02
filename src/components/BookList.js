import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBooks, deleteBook, setBookRating } from "../actions/booksActions";
import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const isEmpty = useSelector(state => state.books.isEmpty);

    const handleSortBooks = () => {
        dispatch(sortBooks());
    };

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId));
    };

    const handleRating = (bookId, rating) => {
        dispatch(setBookRating(bookId, rating));
    };

    const renderStars = (book) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar 
                    key={i} 
                    color={i < book.rating ? '#ffc107' : '#e4e5e9'} 
                    onClick={() => handleRating(book.id, i + 1)}
                />
            );
        }
        return stars;
    };

    return (
        <Container className="mt-5 flex-grow-1">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-center mb-4">Book List</h2>
                    <Button className="mb-3" variant="primary" onClick={handleSortBooks}>
                        Sort Books
                    </Button>
                    <ListGroup>
                        {isEmpty ? (
                            <ListGroup.Item className="text-center">No books available</ListGroup.Item>
                        ) : (
                            books.map((book) => (
                                <ListGroup.Item key={book.id} className="book-item d-flex justify-content-between align-items-center">
                                    <div>
                                        {book.title} by {book.author}
                                        <br />
                                        Rating: <span className="book-rating">{renderStars(book)}</span>
                                    </div>
                                    <div>
                                        <Button className="btn-danger btn-sm" onClick={() => handleDelete(book.id)}>
                                            Delete
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            ))
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default BookList;