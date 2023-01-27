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
            <img
              src={Telegram.src}
              width={46}
              height={46}
              alt="Telegram"
              loading="lazy"
            />
          </i>
          <p className={classes.title}>Fast recruitment process</p>
          <p className={classes.text}>
            A few clicks and offers <br /> in your Telegram
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i className={classes.puzzle}>
            <Puzzle />
          </i>
          <p className={classes.title}>Smart match solution</p>
          <p className={classes.text}>
            Allows you to find the best <br />
            candidates within a seconds
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i>
            <Planet />
          </i>
          <p className={classes.title}>Worldwide bot</p>
          <p className={classes.text}>
            Candidates and vacancies <br />
            from all world
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefits;
