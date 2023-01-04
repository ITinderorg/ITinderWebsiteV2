import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";
import UAFlag from "../svgs/UAFlag";

const Header = () => {
  return (
    <Navbar bg="white" variant="white" sticky="top" expand="lg">
      <Container fluid className={classes.container_wrapper}>
        <Navbar.Brand href="/" className="d-flex align-items-center m-0">
          <img
            alt=""
            src={Logo.src}
            className={"d-inline-block align-top " + classes.logo}
          />
          <div className={classes.born_ukraine}>
            <UAFlag className={classes.born_ukraine_logo} />
            <p>Born in Ukraine!</p>
          </div>
        </Navbar.Brand>

        <Nav className="d-flex justify-content-center align-items-center mx-auto">
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
            <Nav.Link
              href="/"
              className={
                "p-sm-2 " + classes.nav_text + " " + classes.text_collapse_2
              }
            >
              About Us
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>

        <Nav className={classes.nav_button_container}>
          <Nav.Link href="/" className={"p-sm-2 " + classes.nav_button}>
            Get started
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
