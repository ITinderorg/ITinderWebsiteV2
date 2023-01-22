import Benefits from "./benefits/Benefits";
import HowItWorks from "./howItWorks/HowItWorks";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";
import Pricing from "./pricing/Pricing";
import Counter from "./counter/Counter";
import Roadmap from "./roadmap/Roadmap";
import Team from "./Team/Team";
import Header from "../../global/navbar/Header";
import Footer from "../../global/footer/Footer";
import { useRef } from "react";
import Comments from "./comments/Comments";

const IndexPage = ({ data }) => {
  const howItWorks = useRef(null);
  const pricing = useRef(null);
  const testimonials = useRef(null);
  const roadmap = useRef(null);
  const aboutUs = useRef(null);
  const refs = { howItWorks, pricing, testimonials, roadmap, aboutUs };

  return (
    <div>
      <Header refs={refs} />
      <Main secRef={howItWorks} />
      <Benefits />
      <div ref={howItWorks}>
        <HowItWorks />
      </div>
      <div ref={pricing}>
        <Pricing />
      </div>
      <Counter stats={data.stats} />
      <div ref={testimonials}>
        <Comments />
      </div>
      <div ref={roadmap}>
        <Roadmap />
      </div>
      <div ref={aboutUs}>
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
