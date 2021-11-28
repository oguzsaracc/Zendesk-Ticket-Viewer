import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CustomButton from "./CustomButton";

// Navigation bar for the log-out.
const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Nav className="me-5 my-3"></Nav>
        <CustomButton // The button for log-out.
          variant="danger"
          href="https://zccoguzsarac.zendesk.com/access/logout"
          label="Log Out"
        ></CustomButton>
      </Container>
    </Navbar>
  );
};

export default NavBar;
