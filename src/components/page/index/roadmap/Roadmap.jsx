import classes from "./Roadmap.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Img from "../../../../assets/images/roadmap.png";

const Roadmap = () => {
  return (
    <Container className={classes.container}>
      <Row className={"text-center " + classes.title_container}>
        <h2>Roadmap</h2>
        <p>
          We are planning to never stop expanding. <br /> As a community we move
          together to innovative recruitment
        </p>
      </Row>
      <Row>
        <img
          src={Img.src}
          className={classes.image}
          loading="lazy"
          alt="ITinder roadmap"
        />
      </Row>
    </Container>
  );
};

export default Roadmap;
