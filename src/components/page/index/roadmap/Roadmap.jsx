import classes from "./Roadmap.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Img from "../../../../assets/images/roadmap.png";

import { useTranslation } from "react-i18next";

const Roadmap = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className={classes.container}>
      <Row className={"text-center " + classes.title_container}>
        <h2>{t("Roadmap")}</h2>
        <p>
          {t(
            "We are planning to never stop expanding.\n As a community we move together to innovative recruitment"
          )}
        </p>
      </Row>
      <Row>
        <Image
          src={Img.src}
          className={classes.image}
          loading="lazy"
          alt="ITinder roadmap"
          height={989}
          width={1586}
        />
      </Row>
    </Container>
  );
};

export default Roadmap;
