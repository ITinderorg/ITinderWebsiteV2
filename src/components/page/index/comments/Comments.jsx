import classes from "./Comments.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

const Comments = () => {
  return (
    <Container className={classes.container} fluid>
      <Row className={"text-center " + classes.title_container}>
        <h3>What users say about ITinder</h3>
      </Row>
      <Row className={classes.comments_container}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
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
              “It&apos;s very convenient to use ITinder because job search and
              communication with recruiters are done simply on the phone.”
            </p>
            <div className={classes.commentor}>
              <img src={Comment1Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Maria T.</p>
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
              “A great bot for finding IT jobs. Everything is clear and
              understandable🙂”
            </p>
            <div className={classes.commentor}>
              <img src={Comment2Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Evgenia Syniavska</p>
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
              “I really liked using the bot, it was super easy, fast, and
              convenient! The whole experience was smooth and user-friendly.
              I&apos;ve got a new job already, but when I want to change it
              I&apos;ll definitely use the service again!”
            </p>
            <div className={classes.commentor}>
              <img src={Comment3Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Yel Malichenko</p>
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
              “It was great to have the position closed so quickly.🤩 My
              recommendations for everyone! I appreciate your help a lot 👍”
            </p>
            <div className={classes.commentor}>
              <img src={Comment4Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Elizabeth Zhyrova</p>
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
              “Tinder is an amazing bot. It&apos;s easy to use, very convenient
              functionality. I received really cool candidates, who went through
              the entire hiring process. I actively use it in our work, and
              totally recommend it!”
            </p>
            <div className={classes.commentor}>
              <img src={Comment5Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Yana Martyniuk</p>
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
              “Simple and intuitive service. Much easier access than other
              services, though brings the best features from job seeker
              standpoint, especially the salary filter, which is the best.”
            </p>
            <div className={classes.commentor}>
              <img src={Comment6Img.src} className={classes.commentor_photo} />
              <div>
                <p className={classes.commentor_name}>Sergiy Khomchenko</p>
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
