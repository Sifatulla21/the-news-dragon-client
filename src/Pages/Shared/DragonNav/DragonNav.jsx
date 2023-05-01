import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const DragonNav = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <Navbar  className="my-3" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none ps-5 text-dark" to='/'>Home</Link>
            <Link className="text-decoration-none ps-5 text-dark" to="/login">About</Link>
            <Link className="text-decoration-none ps-5 text-dark" to="/register">Career</Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            {
              user && <FaUserCircle className="me-2"
              style={{fontSize:'2rem'}}
            ></FaUserCircle>
            }
            {
              user ? <Button variant="secondary" onClick={handleLogOut}>Logout</Button>: <Link to="/login"><Button variant="secondary">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default DragonNav;