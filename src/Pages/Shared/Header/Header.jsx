import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className="text-center pt-5 pb-5">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favor</p>
                <h3>{moment().format('dddd, MMMM D, YYYY')}</h3>
            </div>
            <div className="d-flex">
                <Button variant="danger">Latest</Button>
                <Marquee className="text-danger" speed={150} gradient="true">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar  className="my-3" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none ps-5 text-dark" to='/category/0'>Home</Link>
            <Link className="text-decoration-none ps-5 text-dark" to="">About</Link>
            <Link className="text-decoration-none ps-5 text-dark" to="">Career</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;