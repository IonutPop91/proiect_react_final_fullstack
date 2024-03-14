import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import BookListContainer from './components/BookListContainer';

const App = ({ shouldRedirect }) => {
  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg" className="mt-3">
          <Navbar.Brand as={Link} to="/">Online Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/books">Book List</Nav.Link>
              <Nav.Link as={Link} to="/addbooks">Add Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/books" element={<BookListContainer />} />
          <Route path="/addbooks" element={<AddBookForm />} />

          {shouldRedirect && <Route path="/" element={<AddBookForm />} />}
        </Routes>
      </Container>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  shouldRedirect: state.shouldRedirect,
});

export default connect(mapStateToProps)(App);