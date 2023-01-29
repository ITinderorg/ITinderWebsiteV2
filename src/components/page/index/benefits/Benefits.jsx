import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Benefits.module.scss";
import Planet from "../../../global/svgs/Planet";
import Puzzle from "../../../global/svgs/Puzzle";
import Telegram from "../../../../assets/images/telegram.png";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className={classes.container}>
      <Row>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i>
            <img
              src={Telegram.src}
              width={46}
              height={46}
              alt="Telegram"
              loading="lazy"
            />
          </i>
          <p className={classes.title}>{t("Fast recruitment process")}</p>
          <p className={classes.text}>
            {t("A few clicks and offers \n in your Telegram")}
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i className={classes.puzzle}>
            <Puzzle />
          </i>
          <p className={classes.title}>{t("Smart match solution")}</p>
          <p className={classes.text}>
            {t("Allows you to find the best \n candidates within a seconds")}
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className={classes.item_container}>
          <i>
            <Planet />
          </i>
          <p className={classes.title}>{t("Worldwide bot")}</p>
          <p className={classes.text}>
            {t("Candidates and vacancies \n from all world")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefits;
