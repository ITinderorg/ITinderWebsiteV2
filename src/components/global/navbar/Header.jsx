import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";
import UAFlag from "../svgs/UAFlag";

const Header = ({ refs }) => {
  const scrollToSection = (e, elementRef) => {
    e.preventDefault();
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <Navbar bg="white" variant="white" sticky="top" expand="lg">
      <Container fluid className={classes.container_wrapper}>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center m-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Image
            alt="ITinder logo"
            src={Logo.src}
            className={"d-inline-block align-top " + classes.logo}
            width={145}
            height={61}
            priority
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
              onClick={(e) => scrollToSection(e, refs.howItWorks)}
            >
              How it works
            </Nav.Link>
            <Nav.Link
              href="/"
              className={"p-sm-2 " + classes.nav_text}
              onClick={(e) => scrollToSection(e, refs.pricing)}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="/"
              className={"p-sm-2 " + classes.nav_text}
              onClick={(e) => scrollToSection(e, refs.testimonials)}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              href="/"
              className={"p-sm-2 " + classes.nav_text}
              onClick={(e) => scrollToSection(e, refs.roadmap)}
            >
              Roadmap
            </Nav.Link>
            <Nav.Link
              href="/"
              className={
                "p-sm-2 " + classes.nav_text + " " + classes.text_collapse_2
              }
              onClick={(e) => scrollToSection(e, refs.aboutUs)}
            >
              About Us
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>

        <Nav className={classes.nav_button_container}>
          <Nav.Link
            href="https://t.me/i_tinder_bot"
            className={"p-sm-2 " + classes.nav_button}
          >
            Get started
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
