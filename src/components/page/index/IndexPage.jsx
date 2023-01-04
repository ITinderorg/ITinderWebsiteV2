import Benefits from "./benefits/Benefits";
import HowItWorks from "./howItWorks/HowItWorks";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";

const IndexPage = () => {
  return (
    <div style={{ height: 6000 }}>
      <Main />
      <Benefits />
      <HowItWorks />
    </div>
  );
};

export default IndexPage;
