import Benefits from "./benefits/Benefits";
import HowItWorks from "./howItWorks/HowItWorks";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";
import Pricing from "./pricing/Pricing";

const IndexPage = () => {
  return (
    <div style={{ height: 6000 }}>
      <Main />
      <Benefits />
      <HowItWorks />
      <Pricing />
    </div>
  );
};

export default IndexPage;
