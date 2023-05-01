import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body  style={{height:"100px"}}>
                <Card.Title>Our First Home</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body style={{height:"100px"}}>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body  style={{height:"100px"}}>
                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInsights;