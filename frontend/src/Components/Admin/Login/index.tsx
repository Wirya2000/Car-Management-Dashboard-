import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={8} className="px-0 d-none d-sm-block">
          <img src="./../../../../public/img/cars.jpg" alt="" className="w-100 vh-100" style={{ objectFit: 'cover' }} />
        </Col>
        <Col>
          <div className="d-flex flex-column justify-content-center align-items-center h-100 px-3">
            <Form className="w-100 p-4">
              <div className="mb-4" style={{ height: '30px', width: '100px', backgroundColor: '#CFD4ED' }}></div>
              <h2 className="mb-5 fw-semibold">Welcome, Admin BCR</h2>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Contoh: johndoe@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-5" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="6+ karakter" />
              </Form.Group>
              <div className="mb-5">
                <Button variant="primary" type="submit" className="w-100">
                  Sign In
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;