import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./Greeter.module.scss";

// Assets
import hand from "../../public/assets/hand.png";

const Greeter = () => {
  const router = useRouter();
  return (
    <div className={styles.greeter}>
      <div className={styles.header}>
        <div className={styles.main}>
          <span className={styles.header_small}>Hello!</span>
          <Image className={styles.hand} src={hand} />
        </div>
        <span>What style you want to try?</span>
      </div>
      <div className={styles.buttons}>
        <Button
          text="CLI"
          onClick={() => {
            router.push("/cmd");
          }}
        />
        <span className={styles.or}>or</span>
        <Button
          text="Classic"
          onClick={() => {
            router.push("/hello");
          }}
        />
      </div>
    </div>
  );
};

export default Greeter;
