import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Telegram from "../../../global/svgs/Telegram";
import classes from "./Benefits.module.scss";
import Planet from "../../../global/svgs/Planet";
import Puzzle from "../../../global/svgs/Puzzle";

const Benefits = () => {
  return (
    <>
      <Container className={classes.container}>
        <Row>
          <Col lg={4} md={4} sm={12} className={classes.item_container}>
            <i>
              <Telegram />
            </i>
            <h5>Fast recruitment process</h5>
            <p>A few clicks and offers in your Telegram</p>
          </Col>
          <Col lg={4} md={4} sm={12} className={classes.item_container}>
            <i>
              <Puzzle />
            </i>
            <h5>Smart match solution</h5>
            <p>
              which allows you to find the best <br />
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
    </>
  );
};

export default Benefits;
