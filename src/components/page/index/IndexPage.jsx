import Benefits from "./benefits/Benefits";
import classes from "./IndexPage.module.scss";
import Main from "./main/Main";

const IndexPage = () => {
  return (
    <div style={{ height: 2000 }}>
      <Main />
      <Benefits />
    </div>
  );
};

export default IndexPage;
