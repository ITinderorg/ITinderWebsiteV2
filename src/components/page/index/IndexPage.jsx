import Benefits from "./benefits/Benefits";
import HowItWorks from "./howItWorks/HowItWorks";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";
import Pricing from "./pricing/Pricing";
import Counter from "./counter/Counter";
import Roadmap from "./roadmap/Roadmap";
import Team from "./Team/Team";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Main />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Counter stats={data.stats} />
      <Roadmap />
      <Team />
    </div>
  );
};

export default IndexPage;
