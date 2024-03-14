import React, {useState} from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/booksActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

const AddBookForm = () =>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleAddBook = () =>{
        dispatch(addBook({title, author}));
        setTitle('');
        setAuthor('');
    }
    return(
        <div className="container mt-5">
      <h2 className="text-center">Add a book:</h2>
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
        <Button variant="primary" onClick={handleAddBook}>
          Add Book
        </Button>
      </Form>
    </div>
  );
};

export default connect()(AddBookForm);