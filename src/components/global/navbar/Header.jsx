import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Navbar bg="white" variant="white" sticky="top" expand="lg">
      <Container fluid className={classes.container_wrapper}>
        <Navbar.Brand href="/" className="d-flex">
          <img
            alt=""
            src={Logo.src}
            className={"d-inline-block align-top " + classes.logo}
          />
        </Navbar.Brand>

        <Nav className="align-items-center">
          <Navbar.Collapse>
            <Nav.Link
              href="/"
              className={
                "p-sm-2 " + classes.nav_text + " " + classes.text_collapse
              }
            >
              How it works
            </Nav.Link>
            <Nav.Link href="/" className={"p-sm-2 " + classes.nav_text}>
              Pricing
            </Nav.Link>
            <Nav.Link href="/" className={"p-sm-2 " + classes.nav_text}>
              Testimonials
            </Nav.Link>
            <Nav.Link href="/" className={"p-sm-2 " + classes.nav_text}>
              Roadmap
            </Nav.Link>
            <Nav.Link href="/" className={"p-sm-2 " + classes.nav_text}>
              About Us
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>

        <Nav>
          <Nav.Link href="/" className={"p-sm-2 " + classes.nav_button}>
            Get started
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
