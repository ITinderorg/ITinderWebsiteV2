import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import classes from "./HowItWorks.module.scss";
import Dots from "../../../../assets/images/dots.png";
import Arrow from "../../../global/svgs/Arrow";

import FirstImg from "../../../../assets/images/chat_start.png";
import SecondImg from "../../../../assets/images/chat_second.png";
import ThirdImg from "../../../../assets/images/chat_third.png";

import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={classes.back}>
      <Container className={classes.container}>
        <Row className={classes.item_container}>
          <Col lg={5} md={6} sm={12} className={classes.start_image_container}>
            <Image
              src={FirstImg.src}
              className={classes.start_image}
              loading="lazy"
              alt="ITinder chat-bot"
              height={1042}
              width={557}
            />
          </Col>
          <Col lg={7} md={6} sm={12} className={classes.start_text}>
            <div className="pe-lg-5 pe-md-5">
              <h2>{t("ITinder - bot")}</h2>
              <p>
                {t(
                  "Simple recruitment through Telegram. \n Press Start to begin!"
                )}
              </p>
            </div>
            <Arrow className={classes.arrow} />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} className={classes.second_text}>
            <div>
              <h2>
                {t("Are you a recruiter \n and looking for IT \n specialists?")}
              </h2>
              <p>
                {t(
                  "Fill the vacancy - Get a match from the candidate \n - Hire successfully"
                )}
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className={classes.second_image_container}>
            <Image
              src={SecondImg.src}
              className={classes.second_image}
              loading="lazy"
              alt="ITinder chat-bot for recruiters"
              height={1042}
              width={818}
            />
          </Col>
        </Row>
        <Row className={classes.item_container}>
          <Col lg={5} md={6} sm={12} className={classes.start_image_container}>
            <Image
              src={ThirdImg.src}
              className={classes.third_image}
              loading="lazy"
              alt="ITinder chat-bot for candidates"
              height={1042}
              width={557}
            />
            <Image
              src={Dots.src}
              className={classes.dots}
              height={500}
              width={500}
              alt="Dots"
              priority
            />
          </Col>
          <Col lg={7} md={6} sm={12} className={classes.start_text}>
            <div className="pe-lg-5 pe-md-5">
              <h2>{t("Are you a candidate?")}</h2>
              <p>{t("Fill out the form - Get a match - Receive an offer")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
