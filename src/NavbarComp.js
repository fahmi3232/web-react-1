import React from "react";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed="top" bg="primary" expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <strong>Movie Netflix</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/movie">
                      <Nav.Link>Movie</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/covid19">
                      <Nav.Link>Kasus Covid 19</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarComp;
