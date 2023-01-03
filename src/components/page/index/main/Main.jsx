import classes from "./Main.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dots from "../../../global/dots/Dots";

const Main = () => {
  return (
    <Container fluid className={classes.container}>
      <Row>
        <Col
          lg={6}
          md={12}
          sm={12}
          className={classes.text_section + " d-flex justify-content-center"}
        >
          <h3>ITinder-bot</h3>
          <h1>
            Quickly find <br />
            your perfect job in IT
          </h1>
          <p>
            Forget the old rules. You can have the best people.
            <br /> Right now. Right here.
          </p>
          <div className={classes.buttons_container}>
            <a className={classes.start_button}>Get started</a>
            <a className={classes.info_button}>Learn How It Works</a>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className={classes.image_container}>
          <div alt="main chat" className={classes.image} />
          <Dots className={classes.dots} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
