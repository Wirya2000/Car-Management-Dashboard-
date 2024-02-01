import React from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import OffcanvasNavbar from '../OffcanvasNavbar';

const NavbarCustom: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand href="#">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Offcanvas placement="end" show={false} target="offcanvasNavbar" onHide={() => {}}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <OffcanvasNavbar />
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
