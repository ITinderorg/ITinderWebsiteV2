import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/logowithtext.svg";
import Image from "next/image";
import classes from "./Header.module.scss";
import UAFlag from "../svgs/UAFlag";

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = ({ refs }) => {
  let [colorEN, setColorEN] = useState("#6275f6");
  let [colorUA, setColorUA] = useState("#D3D3D3");
  let [colorTextEN, setColorTextEN] = useState("#fff");
  let [colorTextUA, setColorTextUA] = useState("#000");
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
            }}
          >
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                setColorEN("#6275f6");
                setColorUA("#D3D3D3");
                setColorTextEN("#fff");
                setColorTextUA("#000");
              }}
              className={classes.lang_button}
              style={{ backgroundColor: colorEN, color: colorTextEN }}
            >
              EN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("ua");
                setColorEN("#D3D3D3");
                setColorUA("#6275f6");
                setColorTextEN("#000");
                setColorTextUA("#fff");
              }}
              className={classes.lang_button + " " + classes.ua}
              style={{ backgroundColor: colorUA, color: colorTextUA }}
            >
              UA
            </button>
          </Nav.Link>
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
