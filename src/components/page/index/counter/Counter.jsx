import classes from "./Counter.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";

import { useTranslation } from "react-i18next";

const Counter = ({ stats }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className={classes.back}>
      <Container className={classes.container}>
        {stats.candidates == 0 ? (
          ""
        ) : (
          <Row className={classes.items}>
            <Col lg={4} md={4} sm={12} className={classes.item_container}>
              <CountUp
                start={0}
                end={stats.candidates}
                duration={1}
                enableScrollSpy
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => <strong ref={countUpRef} />}
              </CountUp>
              <p>{t("Candidates")}</p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <CountUp
                start={0}
                end={stats.matches}
                duration={1}
                enableScrollSpy
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => <strong ref={countUpRef} />}
              </CountUp>
              <p>{t("Matches")}</p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <CountUp
                start={0}
                end={stats.recruiters}
                duration={1}
                enableScrollSpy
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => <strong ref={countUpRef} />}
              </CountUp>
              <p>{t("Recruiters")}</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Counter;
