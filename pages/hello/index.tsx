// Necessities
import { NextPage } from "next";
import styles from "./index.module.scss";

// Components
import Button from "../../components/Button/Button";

//Assets
import { FaArrowDown } from "react-icons/fa";
import portrait from "../../public/assets/portrait.jpg";
// Animation libratires
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

const ClassicRoute: NextPage = () => {
  return (
    <ParallaxProvider>
      <div className={styles.classicRoute}>
        <div className={styles.landing}>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            transition={{ duration: 1 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            <span className={styles.header_small}>Hi.</span>
            <p>
              My name is <strong>Jiří Vala</strong> and I build software for a
              living.
            </p>
          </motion.div>
          <motion.div
            transition={{ delay: 1, duration: 1 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            <div className={styles.meet}>
              <span>Let's meet.</span>
              <FaArrowDown />
            </div>
          </motion.div>
        </div>
        <div className={styles.about}>
          <Parallax speed={-5}>
            <span className={styles.header_small}>About.</span>
          </Parallax>
          <Parallax speed={10} className={styles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem commodi animi quasi est veniam, ullam numquam harum
              minus laudantium, nesciunt consectetur, ipsam explicabo nostrum id
              iste repudiandae officia ex inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem commodi animi quasi est veniam, ullam numquam harum
              minus laudantium, nesciunt consectetur, ipsam explicabo nostrum id
              iste repudiandae officia ex inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem commodi animi quasi est veniam, ullam numquam harum
              minus laudantium, nesciunt consectetur, ipsam explicabo nostrum id
              iste repudiandae officia ex inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem commodi animi quasi est veniam, ullam numquam harum
              minus laudantium, nesciunt consectetur, ipsam explicabo nostrum id
              iste repudiandae officia ex inventore?
            </p>
          </Parallax>
          <Parallax speed={80}>
            <Image
              src={portrait}
              className={styles.portrait}
              height={640}
              width={380}
            />
          </Parallax>
        </div>
        <div className={styles.projects}></div>
      </div>
    </ParallaxProvider>
  );
};

export default ClassicRoute;
