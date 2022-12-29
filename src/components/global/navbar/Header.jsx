import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Container>
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
          <Nav.Link href="/" className="p-sm-2">
            How it works
          </Nav.Link>
          <Nav.Link href="/" className="p-sm-2">
            Pricing
          </Nav.Link>
          <Nav.Link href="/" className="p-sm-2">
            Testimonials
          </Nav.Link>
          <Nav.Link href="/" className="p-sm-2">
            Roadmap
          </Nav.Link>
          <Nav.Link href="/" className="p-sm-2">
            About Us
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="/" className="p-sm-2">
            Get started
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
