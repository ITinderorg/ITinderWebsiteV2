import classes from "./Main.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dots from "../../../global/dots/Dots";
import ChatImg from "../../../../assets/images/chat_main.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <Container fluid className={classes.container}>
      <Row>
        <Col
          lg={6}
          md={6}
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
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Image src={ChatImg.src} alt="main chat" width={625} height={514} />
          <Dots className={classes.dots} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
