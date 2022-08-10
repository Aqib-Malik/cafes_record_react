import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  // Switch

} from 'react-router-dom';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><Link to="/" style={{color:"white",textDecoration: 'none'}}> Islamabad Cafe's</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link><Link to="/" style={{color:"white",textDecoration: 'none'}}> Home</Link></Nav.Link>
              <Nav.Link><Link to="new" style={{color:"white",textDecoration: 'none'}}>Add New</Link></Nav.Link>
              <Nav.Link><Link to="new" style={{color:"white",textDecoration: 'none'}}>Log In</Link></Nav.Link>
              <Nav.Link><Link to="signup" style={{color:"white",textDecoration: 'none'}}>Sign Up</Link></Nav.Link>
              {/* <Nav.Link><Link to="detail" style={{color:"white",textDecoration: 'none'}}>Detail</Link></Nav.Link> */}
              {/* <Route path='/detail' element={<Detail tittle="axc"/>}/> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }
}
 
export default NavBar;