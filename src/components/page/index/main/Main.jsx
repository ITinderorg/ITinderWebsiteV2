import classes from "./Main.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Img from "../../../../assets/images/chat_main.png";
import Dots from "../../../../assets/images/dots.png";
import Image from "next/image";

import { useTranslation } from "react-i18next";

const Main = ({ secRef }) => {
  const { t, i18n } = useTranslation();
  return (
    <Container fluid className={classes.container}>
      <Row>
        <Col
          lg={6}
          md={12}
          sm={12}
          className={classes.text_section + " d-flex justify-content-center"}
        >
          <p className={classes.title}>ITinder-bot</p>
          <h1>{t("Quickly find your \nperfect position match in IT")}</h1>
          <p>
            {t(
              "Forget the old rules. You can have the best people.\n Right now. Right here."
            )}
          </p>
          <div className={classes.buttons_container}>
            <a
              className={classes.start_button}
              href="https://t.me/ITinder_jobs_bot"
            >
              {t("Get started")}
            </a>
            <p
              className={classes.info_button}
              onClick={() => {
                window.scrollTo({
                  top: secRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              {t("Learn How It Works")}
            </p>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className={classes.image_container}>
          <Image
            src={Img.src}
            className={classes.image}
            alt="What can ITinder bot do?"
            fill
            priority
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
      </Row>
    </Container>
  );
};

export default Main;
