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
        <Row>
          <Row className="justify-content-center">
            <Col
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className={
                "d-flex justify-content-center align-items-center align-self-center " +
                classes.social_link
              }
            >
              <a href="https://www.instagram.com/itinder_ua/">
                <AiFillInstagram
                  style={{ color: "white", height: 20, width: 20 }}
                />
              </a>
            </Col>
            <Col
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className={
                "d-flex justify-content-center align-items-center align-self-center " +
                classes.social_link
              }
            >
              <a href="https://www.linkedin.com/company/itinder/">
                <FaLinkedinIn
                  style={{ color: "white", height: 20, width: 20 }}
                />
              </a>
            </Col>
            <Col
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className={
                "d-flex justify-content-center align-items-center align-self-center " +
                classes.social_link
              }
            >
              <a href="https://twitter.com/ITinder_ua">
                <BsTwitter style={{ color: "white", height: 20, width: 20 }} />
              </a>
            </Col>
            <Col
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className={
                "d-flex justify-content-center align-items-center align-self-center " +
                classes.social_link
              }
            >
              <a href="https://t.me/I_Tinder">
                <FaTelegram style={{ color: "white", height: 20, width: 20 }} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className={classes.copyright}>COPYRIGHT © 2023 ITINDER</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
