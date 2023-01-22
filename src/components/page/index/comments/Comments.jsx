import classes from "./Comments.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestImg from "../../../../assets/images/comments_test.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FullStar from "../../../global/svgs/FullStar";

const Comments = () => {
  const items = [
    {
      id: 0,
      text: "“Awesome service, helped me to find a regular customer within a week, with whom I’ve been working for almost 3 years.”",
      name: "John Jason",
      position: "Frontend Developer",
      photo: TestImg.src,
    },
    {
      id: 1,
      text: "“Awesome service, helped me to find a regular customer within a week, with whom I’ve been working for almost 3 years.”",
      name: "John Jason",
      position: "Frontend Developer",
      photo: TestImg.src,
    },
    {
      id: 2,
      text: "“Awesome service, helped me to find a regular customer within a week, with whom I’ve been working for almost 3 years.”",
      name: "John Jason",
      position: "Frontend Developer",
      photo: TestImg.src,
    },
    {
      id: 3,
      text: "“Awesome service, helped me to find a regular customer within a week, with whom I’ve been working for almost 3 years.”",
      name: "John Jason",
      position: "Frontend Developer",
      photo: TestImg.src,
    },
  ];
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
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id} className={classes.swiper_slide}>
                <div className={classes.stars}>
                  <FullStar className={classes.star} />
                  <FullStar className={classes.star} />
                  <FullStar className={classes.star} />
                  <FullStar className={classes.star} />
                  <FullStar className={classes.star} />
                </div>
                <p>{item.text}</p>
                <div className={classes.commentor}>
                  <img src={item.photo} className={classes.commentor_photo} />
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
