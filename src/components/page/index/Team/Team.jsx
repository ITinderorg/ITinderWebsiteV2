import classes from "./Team.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KateImg from "../../../../assets/images/kate.png";
import AndriiImg from "../../../../assets/images/andrii.png";
import VladImg from "../../../../assets/images/vlad.png";
import YuriiImg from "../../../../assets/images/yurii.png";
import UstymImg from "../../../../assets/images/ustym.png";

const Team = () => {
  return (
    <div className={classes.back}>
      <Container className={classes.container}>
        <Row className={"text-center " + classes.title_container}>
          <h2>Our team</h2>
        </Row>
        <Row>
          <Col
            lg={4}
            md={6}
            sm={6}
            className={classes.person_container + " justify-content-lg-end"}
          >
            <div className={classes.item_container}>
              <img
                src={KateImg.src}
                className={classes.image}
                loading="lazy"
                alt="Kate Riabova ITinder"
              />
              <h3>Kate Riabova</h3>
              <p>Founder & IT-recruiter</p>
              <a
                href="https://www.linkedin.com/in/kateryna-ryabova-01a90a202/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.link}></span>
              </a>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={6}
            className={classes.person_container + " w-80"}
          >
            <div className={classes.item_container}>
              <img
                src={AndriiImg.src}
                className={classes.image}
                loading="lazy"
                alt="Andrii Borysenko ITinder"
              />
              <h3>Andrii Borysenko</h3>
              <p>Founder & CEO</p>
              <a
                href="https://www.linkedin.com/in/andrii-borysenko-68a8a518a/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.link}></span>
              </a>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={6}
            className={classes.person_container + " justify-content-lg-start"}
          >
            <div className={classes.item_container}>
              <img
                src={VladImg.src}
                className={classes.image}
                loading="lazy"
                alt="Vladyslav Dubovyi ITinder"
              />
              <h3>Vladyslav Dubovyi</h3>
              <p>Front-End Engineer</p>
              <a
                href="https://www.linkedin.com/in/vladyslav-dubovyi/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.link}></span>
              </a>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={6}
            className={
              classes.person_container +
              " offset-lg-3 justify-content-lg-start me-lg-3"
            }
          >
            <div className={classes.item_container}>
              <img
                src={YuriiImg.src}
                className={classes.image}
                loading="lazy"
                alt="Yurii Voskoboinyk ITinder"
              />
              <h3>Yurii Voskoboinyk</h3>
              <p>Marketing</p>
              <a
                href="https://www.linkedin.com/in/yurii-voskoboinyk/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.link}></span>
              </a>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={6}
            className={classes.person_container + " ms-lg-3"}
          >
            <div className={classes.item_container}>
              <img
                src={UstymImg.src}
                className={classes.image}
                loading="lazy"
                alt="Ustym Manko ITinder"
              />
              <h3>Ustym Manko</h3>
              <p>Sales</p>
              <a
                href="https://www.linkedin.com/in/ustymmanko/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.link}></span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
