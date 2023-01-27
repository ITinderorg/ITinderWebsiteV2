import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Pricing.module.scss";

const Pricing = () => {
  const pricings = [
    {
      id: 0,
      name: "Annual",
      price: "$108",
    },
    {
      id: 1,
      name: "6 month",
      price: "$66",
    },
    {
      id: 2,
      name: "3 month",
      price: "$36",
    },
    {
      id: 3,
      name: "Monthly",
      price: "$15",
    },
  ];
  return (
    <>
      <Container className={classes.container}>
        <Row className={"text-center " + classes.title_container}>
          <h2>Pricing for recruiter</h2>
          <p>
            Subscription is based on the length of our agreement, <br /> the
            longer you stay with us - the less you pay. <br /> Candidates can
            use service free of charge
          </p>
        </Row>
        <Row className={classes.items_container}>
          {pricings.map((item) => {
            return (
              <Col
                lg
                md
                sm={12}
                key={item.id}
                className={classes.item_container}
              >
                <p className={classes.item_title}>{item.name}</p>
                <p className={classes.item_price}>{item.price}</p>
              </Col>
            );
          })}
          <Col lg md sm={12} className={classes.item_container}>
            <p className={classes.item_title}>Enterprise</p>
            <a
              className={classes.item_link}
              href="https://t.me/katrine_ryabova"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
