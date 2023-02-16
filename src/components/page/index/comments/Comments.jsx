import classes from "./Comments.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FullStar from "../../../global/svgs/FullStar";
import HalfStar from "../../../global/svgs/HalfStar";
import EmptyStar from "../../../global/svgs/EmptyStar";

import Comment1Img from "../../../../assets/images/comment_1.png";
import Comment2Img from "../../../../assets/images/comment_2.png";
import Comment3Img from "../../../../assets/images/comment_3.png";
import Comment4Img from "../../../../assets/images/comment_4.png";
import Comment5Img from "../../../../assets/images/comment_5.png";
import Comment6Img from "../../../../assets/images/comment_6.png";

import { useTranslation } from "react-i18next";

const Comments = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className={classes.container} fluid>
      <Row className={"text-center " + classes.title_container}>
        <h2>{t("What users say about ITinder")}</h2>
      </Row>
      <Row className={classes.comments_container}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className={classes.swiper}
        >
          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <HalfStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "It's very convenient to use ITinder because job search and communication with recruiters are done simply on the phone."
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment1Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder SMM manager Maria T."
                width={47}
                height={47}
              />
              <div>
                <p className={classes.commentor_name}>{t("Maria T.")}</p>
                <p className={classes.commentor_position}>SMM manager</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "A great bot for finding IT jobs. Everything is clear and understandable🙂"
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment2Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder IT Researcher Evgenia Syniavska"
                width={47}
                height={47}
              />
              <div>
                <p className={classes.commentor_name}>
                  {t("Evgenia Syniavska")}
                </p>
                <p className={classes.commentor_position}>IT Researcher</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <EmptyStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "I really liked using the bot, it was super easy, fast, and convenient! The whole experience was smooth and user-friendly. I'll definitely use the service again!"
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment3Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder Project manager Yel Malichenko"
                width={47}
                height={47}
              />
              <div>
                <p className={classes.commentor_name}>{t("Yel Malichenko")}</p>
                <p className={classes.commentor_position}>Project manager</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "It was great to have the position closed so quickly.🤩 My recommendations for everyone! I appreciate your help a lot 👍"
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment4Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder Elizabeth Zhyrova Recruitment Researcher"
                width={47}
                height={47}
              />
              <div>
                <p className={classes.commentor_name}>
                  {t("Elizabeth Zhyrova")}
                </p>
                <p className={classes.commentor_position}>
                  Recruitment Researcher
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "ITinder is an amazing bot. It's easy to use. I received really cool candidates, who went through the entire hiring process. I actively use it in our work, and totally recommend it!"
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment5Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder Yana Martyniuk IT Recruiter"
                width={47}
                height={47}
              />
              <div>
                <p className={classes.commentor_name}>{t("Yana Martyniuk")}</p>
                <p className={classes.commentor_position}>IT Recruiter</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.swiper_slide}>
            <div className={classes.stars}>
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
              <FullStar className={classes.star} />
            </div>
            <p className={classes.comment_text}>
              “
              {t(
                "Simple and intuitive service. Much easier access than other services, though brings the best features from job seeker standpoint, especially the salary filter, which is the best."
              )}
              ”
            </p>
            <div className={classes.commentor}>
              <Image
                src={Comment6Img.src}
                className={classes.commentor_photo}
                loading="lazy"
                alt="ITinder Senior .NET Software Engineer Sergiy Khomchenko"
                width={47}
                height={47}
                quality={75}
              />
              <div>
                <p className={classes.commentor_name}>
                  {t("Sergiy Khomchenko")}
                </p>
                <p className={classes.commentor_position}>
                  Senior .NET Software Engineer
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={classes.back_left}></div>
        <div className={classes.back_right}></div>
      </Row>
    </Container>
  );
};

export default Comments;
