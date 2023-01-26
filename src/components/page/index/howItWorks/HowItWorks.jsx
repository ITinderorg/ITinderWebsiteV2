import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./HowItWorks.module.scss";
import Dots from "../../../global/svgs/Dots";
import Arrow from "../../../global/svgs/Arrow";

import FirstImg from "../../../../assets/images/chat_start.png";
import SecondImg from "../../../../assets/images/chat_second.png";
import ThirdImg from "../../../../assets/images/chat_third.png";

const HowItWorks = () => {
  return (
    <section className={classes.back}>
      <Container className={classes.container}>
        <Row className={classes.item_container}>
          <Col lg={5} md={6} sm={12} className={classes.start_image_container}>
            <img
              src={FirstImg.src}
              className={classes.start_image}
              title="telegram"
              loading="lazy"
            />
          </Col>
          <Col lg={7} md={6} sm={12} className={classes.start_text}>
            <div className="pe-5">
              <h3>ITinder - bot</h3>
              <p>
                Simple recruitment through Telegram. <br />
                Press Start to begin!
              </p>
            </div>
            <Arrow className={classes.arrow} />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} className={classes.second_text}>
            <div>
              <h3>
                Are you a recruiter <br /> and looking for IT <br />
                specialists?
              </h3>
              <p>
                Fill the vacancy, get a match from the candidate,
                <br /> hire successfully{" "}
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className={classes.second_image_container}>
            <img
              src={SecondImg.src}
              className={classes.second_image}
              title="telegram"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className={classes.item_container}>
          <Col lg={5} md={6} sm={12} className={classes.start_image_container}>
            <img
              src={ThirdImg.src}
              className={classes.third_image}
              title="telegram"
              loading="lazy"
            />
            <Dots className={classes.dots} />
          </Col>
          <Col lg={7} md={6} sm={12} className={classes.start_text}>
            <div className="pe-5">
              <h3>Are you a candidate?</h3>
              <p>Fill out the form - Get a match - Receive an offer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
