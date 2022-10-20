import Prompt from "../Prompt";
import styles from "./CommandLine.module.scss";

import BOOT_SEQUENCE from "../../public/assets/sequence.js";
import { useEffect, useState } from "react";

const BootSequence = () => {
  return BOOT_SEQUENCE.map((d, i) => {
    return <SequenceElement text={d} />;
  });
};

const CommandLine = () => {
  return (
    <div className={styles.commandline}>
      <div className={styles.boot}>{/*yuck*/ BootSequence()}</div>
      <div className="outputs"></div>
      <div className={styles.prompt}>
        <Prompt />
        <input type="text" />
      </div>
    </div>
  );
};

export default CommandLine;

const SequenceElement = (props: { text: string }) => {
  // Delay functions
  const delay = getRandomInt(10000);
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible((prev) => true);
      console.log(delay);
    }, delay);
  }, []);

  return isVisible ? (
    <div>
      <span>{props.text}</span>
    </div>
  ) : (
    <></>
  );
};
