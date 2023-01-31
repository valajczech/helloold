import { NextPage } from "next";
import CommandLine from "../../components/CommandLine/CommandLine";
import styles from "./index.module.scss";

const CmdRoute: NextPage = () => {
  return (
    <div className={styles.commandLineRoute}>
      <CommandLine />
    </div>
  );
};

export default CmdRoute;
