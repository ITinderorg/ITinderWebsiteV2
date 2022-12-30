import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <Container>
        <Row>
          <Row className="justify-content-center">
            <Col
              lg={1}
              md={1}
              sm={1}
              className="d-flex justify-content-center align-items-center align-self-center"
              style={{ height: 80 }}
            >
              <AiFillInstagram
                style={{ color: "white", height: 20, width: 20 }}
              />
            </Col>
            <Col
              lg={1}
              md={1}
              sm={1}
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <FaLinkedinIn style={{ color: "white", height: 20, width: 20 }} />
            </Col>
            <Col
              lg={1}
              md={1}
              sm={1}
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <FaTelegram style={{ color: "white", height: 20, width: 20 }} />
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
