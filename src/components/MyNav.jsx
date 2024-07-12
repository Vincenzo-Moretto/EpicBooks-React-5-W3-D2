import React from "react";
import { Form, Nav, Navbar, NavLink } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";

function MyNav({ toggleDarkMode }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Navbar bg="dark" variant="dark" className="ps-5 d-flex justify-content-between">
      <Nav>
        <Nav.Link href="#">HOME</Nav.Link>
        <Nav.Link href="#">ABOUT</Nav.Link>
        <Nav.Link href="#">BROWSE</Nav.Link>
        <NavLink>
          <CgDarkMode onClick={toggleDarkMode} style={{ cursor: "pointer" }} />
        </NavLink>
      </Nav>
      <Form className="mx-auto w-25">
        <Form.Control
          type="search"
          placeholder="Cerca un libro"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form>
      <Nav>
        <Nav.Link href="#">
          <BsCart4 className="fs-3 me-5" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
