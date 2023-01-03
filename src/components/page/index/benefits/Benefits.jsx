import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Telegram from "../../../global/svgs/Telegram";
import UAFlag from "../../../global/svgs/UAFlag";
import Liqpay from "../../../../assets/images/liqpay.svg";
import Bitcoin from "../../../../assets/images/bitcoin.svg";
import classes from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <>
      <Container className={classes.container}>
        <Row>
          <Col lg={4} md={4} sm={12} className={classes.item_container}>
            <i>
              <Telegram />
            </i>
            <h5>Fast hiring</h5>
            <p>A few clicks and offers in your Telegram</p>
          </Col>
          <Col lg={4} md={4} sm={12} className={classes.item_container}>
            <i>
              <UAFlag />
            </i>
            <h5>
              30% of the profit goes <br /> to the Armed Forces
            </h5>
            <p>#StandWithUkraine</p>
          </Col>
          <Col lg={4} md={4} sm={12} className={classes.item_container}>
            <Row>
              <div className={classes.icons}>
                <i>
                  <img src={Liqpay.src} />
                </i>
                <i>
                  <img src={Bitcoin.src} />
                </i>
              </div>
            </Row>
            <h5>Payment for hire</h5>
            <p>Pay via Liqpay or crypto</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Benefits;
