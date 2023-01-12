import Benefits from "./benefits/Benefits";
import HowItWorks from "./howItWorks/HowItWorks";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";
import Pricing from "./pricing/Pricing";
import Counter from "./counter/Counter";
import Roadmap from "./roadmap/Roadmap";

const IndexPage = ({ data }) => {
  return (
    <div style={{ height: 6000 }}>
      <Main />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Counter stats={data.stats} />
      <Roadmap />
    </div>
  );
};

export default IndexPage;
