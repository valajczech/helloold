// Necessities
import { NextPage } from "next";
import styles from "./index.module.scss";

// Components
import Button from "../../components/Button/Button";

//Assets
import {
  SiTypescript,
  SiFirebase,
  SiJavascript,
  SiSpring,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import portrait from "../../public/assets/portrait.jpg";
// Animation libratires
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SocialList from "../../components/SocialList/SocialList";

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
              <span className={styles.scroll_btn}>
                <span className={styles.mouse}>
                  <span></span>
                </span>
              </span>
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
            <div className={styles.portraitWrapper}>
              <Image
                src={portrait}
                className={styles.portrait}
                height={640}
                width={380}
              />
            </div>
          </Parallax>
        </div>
        <div className={styles.projects}>
          <Parallax speed={5}>
            <span className={styles.header_small}>
              Projects & contributions.
            </span>
          </Parallax>
          <div className={styles.projectList}>
            <div className={styles.left}>
              <Parallax speed={3}>
                <ProjectCard
                  number="2"
                  inProgress={false}
                  title="BAIC.CZ"
                  img={portrait}
                  techstack={[
                    <FaReact />,
                    <SiTypescript />,
                    <FaSass />,
                    <SiFirebase />,
                    <SiSpring />,
                  ]}
                />
                <ProjectCard
                  number="4"
                  techstack={[
                    <FaReact />,
                    <TbBrandNextjs />,
                    <SiTypescript />,
                    <FaSass />,
                    <SiFirebase />,
                    <SiSpring />,
                  ]}
                  inProgress
                  title="TALENSE"
                  img={portrait}
                />
                <ProjectCard
                  number="6"
                  techstack={[
                    <SiJavascript />,
                    <FaCss3 />,
                    <SiCsharp />,
                    <SiDotnet />,
                  ]}
                  inProgress
                  title="ePIC by Twinformatics"
                  img={portrait}
                />
              </Parallax>
            </div>
            <div className={styles.right}>
              <Parallax speed={40}>
                <ProjectCard
                  number="1"
                  title="PORTFOLIO & CMS FOR PHOTOGRAPHER"
                  inProgress={false}
                  img={portrait}
                  techstack={[
                    <FaReact />,
                    <SiJavascript />,
                    <FaSass />,
                    <FaHtml5 />,
                    <FaCss3 />,
                    <SiFirebase />,
                  ]}
                />
                <ProjectCard
                  number="3"
                  inProgress
                  title="ACTIVITY REPORTING APP"
                  img={portrait}
                  techstack={[
                    <FaReact />,
                    <SiTypescript />,
                    <FaSass />,
                    <SiFirebase />,
                    <SiSpring />,
                  ]}
                />
                <ProjectCard
                  number="5"
                  inProgress={false}
                  title="TownOut"
                  img={portrait}
                  techstack={[<SiJavascript />, <FaHtml5 />, <FaCss3 />]}
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <SocialList />
        </div>
        <div className={styles.cv}>
          <Button text="Download CV" />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ClassicRoute;
