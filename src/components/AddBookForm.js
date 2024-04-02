import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../actions/booksActions";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddBookForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleAddBook = () => {
        dispatch(addBook({ title, author }));
        setTitle('');
        setAuthor('');
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Add a book:</h2>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAuthor">
                            <Form.Label>Author:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddBook} className="mt-3">
                            Add Book
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddBookForm;