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
    {
      id: 4,
      name: "Enterprise",
      price: "Contact Us",
    },
  ];
  return (
    <>
      <Container className={classes.container}>
        <Row className={"text-center " + classes.title_container}>
          <h3>Price list for a recruiter</h3>
          <p>
            The size of the bonus depends on the professional level of your
            candidate.
            <br /> You indicate this level when creating a vacancy
          </p>
        </Row>
        <Row className={classes.items_container + " offset-2"}>
          {pricings.map((item) => {
            return (
              <Col
                lg={2}
                sm={6}
                key={item.id}
                className={classes.item_container}
              >
                <p className={classes.item_title}>{item.name}</p>
                <p className={classes.item_price}>{item.price}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
