import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./Greeter.module.scss";

// Assets
import hand from "../../public/assets/hand.png";
import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";

const Greeter = () => {
  const router = useRouter();
  const [wantApi, setWantsApi] = useState<Boolean>(false);
  return (
    <div className={styles.greeter}>
      <div className={styles.header}>
        <div className={styles.main}>
          <span className={styles.header_small}>Hello!</span>
          <Image className={styles.hand} src={hand} />
        </div>
        <span>How shall we proceed?</span>
      </div>
      <div className={styles.buttons}>
        <Button
          text="Quick contact!"
          onClick={() => {
            // Do something
          }}
        />
        <span className={styles.or}>or</span>
        <Button
          text="Show me what you got! "
          onClick={() => {
            router.push("/hello");
          }}
        />
      </div>
      <div
        className={styles.api}
        onClick={() => {
          setWantsApi((prev) => true);
        }}
      >
        <span>You can also try the API !</span>
        <FaChevronCircleDown />
      </div>
    </div>
  );
};

export default Greeter;
