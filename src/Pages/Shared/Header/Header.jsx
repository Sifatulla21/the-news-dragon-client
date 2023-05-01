import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
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
        </Container>
    );
};

export default Header;