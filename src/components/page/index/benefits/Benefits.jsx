import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Benefits.module.scss";
import Planet from "../../../global/svgs/Planet";
import Puzzle from "../../../global/svgs/Puzzle";
import Telegram from "../../../../assets/images/telegram.png";

const Benefits = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i>
            <img src={Telegram.src} width={46} height={46} />
          </i>
          <h5>Fast recruitment process</h5>
          <p>
            A few clicks and offers <br /> in your Telegram
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i className={classes.puzzle}>
            <Puzzle />
          </i>
          <h5>Smart match solution</h5>
          <p>
            Allows you to find the best <br />
            candidates within a seconds
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i>
            <Planet />
          </i>
          <h5>Worldwide bot</h5>
          <p>
            Candidates and vacancies <br />
            from all world
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefits;
