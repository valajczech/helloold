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
import ar from "../../public/assets/ar_miniature.png";
import baic from "../../public/assets/baic_miniature.png";
import bures from "../../public/assets/bures_miniature.png";
import townout from "../../public/assets/townout_miniature.png";
import talense from "../../public/assets/talense_miniature.png";

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
            <p>Hello,</p>
            <p>
              I am a young, mostly self-learned fullstack developer with main
              focus on Javascript/Typescript based technologies which im most
              experienced in, but from time to time I wander to utterly
              different stuff, for example Python or Arduino/Raspberry Pi.
            </p>
            <p>
              Mostly I specialize in building and deploying web applications,
              but I have developed a few websites.
            </p>
            <p>
              Alongside building (web)applications, I am a total petrolhead and
              I love cars & motorycles. I also do a fair bit of travelling and
              adventurism.
            </p>

            <p>Scroll down to see my latest projects !</p>
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
                  img={baic}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                    <SiSpring key={"icon"} />,
                  ]}
                />
                <ProjectCard
                  number="4"
                  techstack={[
                    <FaReact key={"icon"} />,
                    <TbBrandNextjs key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                  ]}
                  inProgress
                  title="TALENSE"
                  img={talense}
                />
                <ProjectCard
                  number="6"
                  techstack={[
                    <SiJavascript key={"icon"} />,
                    <FaCss3 key={"icon"} />,
                    <SiCsharp key={"icon"} />,
                    <SiDotnet key={"icon"} />,
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
                  img={bures}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiJavascript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <FaHtml5 key={"icon"} />,
                    <FaCss3 key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                  ]}
                />
                <ProjectCard
                  number="3"
                  inProgress
                  title="ACTIVITY REPORTING APP"
                  img={ar}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                    <SiSpring key={"icon"} />,
                  ]}
                />
                <ProjectCard
                  number="5"
                  inProgress={false}
                  title="TownOut"
                  img={townout}
                  techstack={[
                    <SiJavascript key={"icon"} />,
                    <FaHtml5 key={"icon"} />,
                    <FaCss3 key={"icon"} />,
                  ]}
                />
                <ProjectCard
                  number="7"
                  inProgress={false}
                  title="School Examination App"
                  img={portrait}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                  ]}
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <SocialList />
        </div>
        <div className={styles.cv}>
          <Button
            text="Get my CV"
            onClick={() => {
              window.location.assign("/assets/resume.pdf");
            }}
          />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ClassicRoute;
