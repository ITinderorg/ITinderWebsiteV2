import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Row className="justify-content-center">
          <Col
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className={
              "d-flex justify-content-center align-items-center align-self-center " +
              classes.social_link
            }
          >
            <Col className="d-flex justify-content-center">
              <a
                href="https://www.instagram.com/itinder_ua/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram
                  style={{ color: "white", height: 20, width: 20 }}
                />
              </a>
            </Col>
            <Col className="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/company/itinder/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn
                  style={{ color: "white", height: 20, width: 20 }}
                />
              </a>
            </Col>
            <Col className="d-flex justify-content-center">
              <a
                href="https://twitter.com/ITinder_ua"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter style={{ color: "white", height: 20, width: 20 }} />
              </a>
            </Col>
            <Col className="d-flex justify-content-center">
              <a href="https://t.me/I_Tinder" target="_blank" rel="noreferrer">
                <FaTelegram style={{ color: "white", height: 20, width: 20 }} />
              </a>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className={classes.copyright}>COPYRIGHT © 2023 ITINDER</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
