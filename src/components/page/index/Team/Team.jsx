import classes from "./Team.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KateImg from "../../../../assets/images/kate.png";
import AndriiImg from "../../../../assets/images/andrii.png";
import VladImg from "../../../../assets/images/vlad.png";
import YuriiImg from "../../../../assets/images/yurii.png";

const Team = () => {
  return (
    <Container className={classes.container}>
      <Row className={"text-center " + classes.title_container}>
        <h3>Our team</h3>
      </Row>
      <Row>
        <Col lg={3} md={6} sm={6} className={classes.item_container}>
          <img src={KateImg.src} className={classes.image} />
          <h5>Kate Riabova</h5>
          <p>Founder ITinder, IT-recuiter</p>
          <a
            href="https://www.linkedin.com/in/kateryna-ryabova-01a90a202/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.link}></span>
          </a>
        </Col>
        <Col lg={3} md={6} sm={6} className={classes.item_container}>
          <img src={AndriiImg.src} className={classes.image} />
          <h5>Andrii Borysenko</h5>
          <p>
            Founder & CEO ITinder <br />
            .NET Software Engineer
          </p>
          <a
            href="https://www.linkedin.com/in/andrii-borysenko-68a8a518a/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.link}></span>
          </a>
        </Col>
        <Col lg={3} md={6} sm={6} className={classes.item_container}>
          <img src={VladImg.src} className={classes.image} />
          <h5>Vladyslav Dubovyi</h5>
          <p>Fullstack .NET Engineer</p>
          <a
            href="https://www.linkedin.com/in/vladyslav-dubovyi/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.link}></span>
          </a>
        </Col>
        <Col lg={3} md={6} sm={6} className={classes.item_container}>
          <img src={YuriiImg.src} className={classes.image} />
          <h5>Yurii Voskoboinyk</h5>
          <p>Marketing Team Lead</p>
          <a
            href="https://www.linkedin.com/in/yurii-voskoboinyk/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.link}></span>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
