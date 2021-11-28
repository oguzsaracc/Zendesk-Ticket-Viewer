import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <CustomButton
              variant="danger"
              href="https://zccoguzsarac.zendesk.com/access/logout"
              label="Log Out"
            ></CustomButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
