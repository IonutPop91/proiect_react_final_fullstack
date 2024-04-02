import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import BookListContainer from './components/BookListContainer';
import app from './firebase';

const App = ({ shouldRedirect }) => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                    <Navbar.Brand as={Link} to="/">Online Library</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/books">Book List</Nav.Link>
                            <Nav.Link as={Link} to="/addbooks">Add Book</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container className="flex-grow-1">
                    <Routes>
                        <Route path="/books" element={<BookListContainer />} />
                        <Route path="/addbooks" element={<AddBookForm />} />

                        {shouldRedirect && <Route path="/" element={<AddBookForm />} />}
                    </Routes>
                </Container>

                <footer className="App-footer bg-dark text-light py-3 mt-auto">
                    <Container>
                        <p className="mb-0 text-center">© 2024 My Bookshelf. All rights reserved.</p>
                    </Container>
                </footer>
            </div>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    shouldRedirect: state.shouldRedirect,
});

export default connect(mapStateToProps)(App);