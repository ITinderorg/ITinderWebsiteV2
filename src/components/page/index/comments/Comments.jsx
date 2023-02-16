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

  const comments = [
    {
      text: t(
        "It's very convenient to use ITinder because job search and communication with recruiters are done simply on the phone."
      ),
      name: t("Maria T."),
      position: "SMM manager",
      stars: [1, 1, 1, 1, 0.5],
      photo: Comment1Img.src,
    },
    {
      text: t(
        "A great bot for finding IT jobs. Everything is clear and understandable🙂"
      ),
      name: t("Evgenia Syniavska"),
      position: "IT Researcher",
      stars: [1, 1, 1, 1, 1],
      photo: Comment2Img.src,
    },
    {
      text: t(
        "I really liked using the bot, it was super easy, fast, and convenient! The whole experience was smooth and user-friendly. I'll definitely use the service again!"
      ),
      name: t("Yel Malichenko"),
      position: "Project manager",
      stars: [1, 1, 1, 1, 0],
      photo: Comment3Img.src,
    },
    {
      text: t(
        "It was great to have the position closed so quickly.🤩 My recommendations for everyone! I appreciate your help a lot 👍"
      ),
      name: t("Elizabeth Zhyrova"),
      position: "Recruitment Researcher",
      stars: [1, 1, 1, 1, 1],
      photo: Comment4Img.src,
    },
    {
      text: t(
        "ITinder is an amazing bot. It's easy to use. I received really cool candidates, who went through the entire hiring process. I actively use it in our work, and totally recommend it!"
      ),
      name: t("Yana Martyniuk"),
      position: "IT Recruiter",
      stars: [1, 1, 1, 1, 1],
      photo: Comment5Img.src,
    },
    {
      text: t(
        "Simple and intuitive service. Much easier access than other services, though brings the best features from job seeker standpoint, especially the salary filter, which is the best."
      ),
      name: t("Sergiy Khomchenko"),
      position: "Senior .NET Software Engineer",
      stars: [1, 1, 1, 1, 1],
      photo: Comment6Img.src,
    },
  ];

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
          {comments.map((item, index) => {
            return (
              <SwiperSlide className={classes.swiper_slide} key={index}>
                <div className={classes.stars}>
                  {item.stars.map((star, index) => {
                    return star == 1 ? (
                      <FullStar className={classes.star} key={index} />
                    ) : star == 0.5 ? (
                      <HalfStar className={classes.star} key={index} />
                    ) : (
                      <EmptyStar className={classes.star} key={index} />
                    );
                  })}
                </div>
                <p className={classes.comment_text}>“{item.text}”</p>
                <div className={classes.commentor}>
                  <Image
                    src={item.photo}
                    className={classes.commentor_photo}
                    loading="lazy"
                    alt={"ITinder " + item.name}
                    width={47}
                    height={47}
                  />
                  <div>
                    <p className={classes.commentor_name}>{item.name}</p>
                    <p className={classes.commentor_position}>
                      {item.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={classes.back_left}></div>
        <div className={classes.back_right}></div>
      </Row>
    </Container>
  );
};

export default Comments;
