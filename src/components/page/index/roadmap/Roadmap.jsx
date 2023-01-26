import classes from "./Roadmap.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Roadmap = () => {
  return (
    <Container className={classes.container}>
      <Row className={"text-center " + classes.title_container}>
        <h3>Roadmap</h3>
        <p>
          We are planning to never stop expanding. <br /> As a community we move
          together to innovative recruitment
        </p>
      </Row>
      <Row>
        <div className={classes.image} />
      </Row>
    </Container>
  );
};

export default Roadmap;
