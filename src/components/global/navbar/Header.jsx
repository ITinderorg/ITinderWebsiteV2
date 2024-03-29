import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";
import UAFlag from "../svgs/UAFlag";

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = ({ refs }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
            <p>{t("Born in Ukraine!")}</p>
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
              {t("How it works")}
            </Nav.Link>
            <Nav.Link
              href="/"
              className={"p-sm-2 " + classes.nav_text}
              onClick={(e) => scrollToSection(e, refs.pricing)}
            >
              {t("Pricing")}
            </Nav.Link>
            <Nav.Link
              href="/"
              className={"p-sm-2 " + classes.nav_text}
              onClick={(e) => scrollToSection(e, refs.testimonials)}
            >
              {t("Reviews")}
            </Nav.Link>
            <Nav.Link
              href="/"
              className={
                "p-sm-2 " + classes.nav_text + " " + classes.text_collapse_2
              }
              onClick={(e) => scrollToSection(e, refs.roadmap)}
            >
              {t("Roadmap")}
            </Nav.Link>
            <Nav.Link
              href="/"
              className={
                "p-sm-2 " + classes.nav_text + " " + classes.text_collapse_2
              }
              onClick={(e) => scrollToSection(e, refs.aboutUs)}
            >
              {t("About Us")}
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>

        <Nav className={classes.nav_button_container}>
          <Nav.Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className={classes.language_selector}
          >
            {t("Language")}
          </Nav.Link>
          <Collapse in={open}>
            <div id="example-collapse-text" className={classes.languages}>
              <button
                className={classes.lang_button}
                onClick={(e) => {
                  e.preventDefault();
                  i18n.changeLanguage("ua");
                }}
              >
                <div className={classes.flag_ua} />
              </button>
              <button
                className={classes.lang_button}
                onClick={(e) => {
                  e.preventDefault();
                  i18n.changeLanguage("en");
                }}
              >
                <div className={classes.flag_us} />
              </button>
            </div>
          </Collapse>

          <Nav.Link
            href="https://t.me/ITinder_jobs_bot"
            className={"p-sm-2 " + classes.nav_button}
          >
            {t("Get started")}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
