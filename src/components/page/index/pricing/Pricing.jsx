import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Pricing.module.scss";

import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const pricings = [
    {
      id: 0,
      name: "Annual",
      price: "$108",
      save: "Save up $72",
    },
    {
      id: 1,
      name: "6 month",
      price: "$66",
      save: "Save up $24",
    },
    {
      id: 2,
      name: "3 month",
      price: "$36",
      save: "Save up $9",
    },
    {
      id: 3,
      name: "Monthly",
      price: "$15",
    },
  ];

  /*
  <Row className={"text-center " + classes.desc_title_container}>
          <h3>{t("What you get purchasing this subscription")}</h3>
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Row className={classes.desc_container}>
            <ul>
              <li>{t("Full access to ITinder bot")}</li>
              <li>{t("Exclusive access to recruiters community")}</li>
              <li>{t("You can create up to 10 vacancies")}</li>
              <li>{t("Unlimited matches with candidates")}</li>
              <li>{t("24/7 support from us")}</li>
            </ul>
          </Row>
        </Row>
  */

  return (
    <>
      <Container className={classes.container}>
        <Row className={"text-center " + classes.title_container}>
          <h2>{t("Pricing for recruiter")}</h2>
          <p>
            {t(
              "Subscription is based on the term of our agreement, \n the longer you stay with us - the less you pay. \n Candidates can use service free of charge"
            )}
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
                <p className={classes.item_title}>{t(item.name)}</p>
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ height: 86 }}
                >
                  <p className={classes.item_price}>{item.price}</p>
                  {item.save != undefined ? (
                    <p className={classes.item_save}>{t(item.save)}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            );
          })}
          <Col lg md sm={12} className={classes.item_container}>
            <p className={classes.item_title}>{t("Enterprise")}</p>
            <a
              className={classes.item_link}
              href="https://t.me/katrine_ryabova"
              target="_blank"
              rel="noreferrer"
            >
              {t("Contact Us")}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
