import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Navbar bg="white" variant="white" fixed="top" expand="sm">
      <Container fluid className={classes.container_wrapper}>
        <Navbar.Brand href="/" className="d-flex">
          <Image
            alt=""
            src={Logo.src}
            width={145}
            height={61}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Nav className="align-items-center">
          <Nav.Link href="/" className={"p-sm-2 " + classes.nav_text}>
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
