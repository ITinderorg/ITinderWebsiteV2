import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Accordion from "react-bootstrap/Accordion";
import classes from "./Pricing.module.scss";

import { useTranslation } from "react-i18next";
import { useState } from "react";

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

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const benefits = [
    {
      header: "Full access to ITinder bot",
      text: "Unlimited access to ITinder bot where thousands of candidates are awaiting for you in just few clicks.",
    },
    {
      header: "Exclusive access to recruiters community",
      text: "Access to recruiter's community chat with best recruiters practices, tips, ultimate networking and troubleshooting. There are also webinars with community leaders awaiting for you there.",
    },
    {
      header: "You can create up to 10 vacancies",
      text: "You can create up to 10 vacancies, which gives a high level of automation of sourcing process equivalent to an almost month of your life.",
    },
    {
      header: "Unlimited matches with candidates",
      text: "Get unlimited matches with candidates, which means you can acquire professionals anywhere and anytime.",
    },
    {
      header: "24/7 support from us",
      text: "Be supported 24/7 with our team in any case or question you have in regard of our system. We are always here for you.",
    },
  ];

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

        <Row className={"text-center " + classes.desc_title_container}>
          <h3>{t("What is included in the subscription")}</h3>
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Row className={classes.desc_container}>
            <Accordion
              defaultActiveKey="0"
              className={classes.accordition}
              flush
            >
              {benefits.map((item, index) => {
                return (
                  <Accordion.Item
                    eventKey={index}
                    key={index}
                    className={classes.accordition_item}
                  >
                    <Accordion.Header className={classes.accordition_header}>
                      {t(item.header)}
                    </Accordion.Header>
                    <Accordion.Body className={classes.collapse_container}>
                      {t(item.text)}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
