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
          We are planning never stop and expand the functionality. <br /> To
          create a community and move together in Web3
        </p>
      </Row>
      <Row>
        <div className={classes.image} />
      </Row>
    </Container>
  );
};

export default Roadmap;
