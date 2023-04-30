import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import bg from '../../../assets/bg.png'
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className="mb-2" variant="outline-primary"><FaGoogle />Login With Google</Button>
            <Button className="mb-2" variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="..." />
            </div>
            </div>
            );
};

            export default RightNav;