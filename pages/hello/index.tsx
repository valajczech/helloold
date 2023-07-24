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
import reviizio from "../../public/assets/Revizio.png";

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
                  demoURL="https://baic.cz/"
                  img={baic}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                    <SiSpring key={"icon"} />,
                  ]}
                  shortDescription="New company website for Ostrava based company B&A Insurance Consulting providing a new, modern user interface to get familiar with the company and the services they provide."
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
                  shortDescription={
                    "A new social platform for bussinesses and workers smoothening out hiring processes as well as some certain work-related issues the modern world is currently facing."
                  }
                />
                <ProjectCard
                  number="6"
                  inProgress={true}
                  title="Revizio"
                  img={reviizio}
                  demoURL="https://revizio.app/"
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                  ]}
                  shortDescription={
                    "Application providing modern approach for revision technicians and their customers."
                  }
                />
                {/*<ProjectCard
                  number="6"
                  inProgress={false}
                  title="School Examination App"
                  img={portrait}
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiTypescript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                  ]}
                  shortDescription={
                    "Application for schools and teachers that help with examination and quizzes creation."
                  }
                />*/}
              </Parallax>
            </div>
            <div className={styles.right}>
              <Parallax speed={40}>
                <ProjectCard
                  number="1"
                  title="PORTFOLIO & CMS FOR PHOTOGRAPHER"
                  inProgress={false}
                  img={bures}
                  demoURL="https://dmp-bures.web.app/"
                  techstack={[
                    <FaReact key={"icon"} />,
                    <SiJavascript key={"icon"} />,
                    <FaSass key={"icon"} />,
                    <FaHtml5 key={"icon"} />,
                    <FaCss3 key={"icon"} />,
                    <SiFirebase key={"icon"} />,
                  ]}
                  shortDescription={
                    "Portfolio-based website and fully functional content management system for an amateur photographer, that can upload, manage and edit all the photos that the photographer wants to show the world."
                  }
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
                  shortDescription={
                    "Application for tailored for specific needs of Ostrava based company B&A Insurance Consulting modernizing the old, Microsoft's Excel sheet based work hours storing."
                  }
                />
                <ProjectCard
                  number="5"
                  inProgress={false}
                  demoURL="https://townout.cz/"
                  title="TownOut"
                  img={townout}
                  techstack={[
                    <SiJavascript key={"icon"} />,
                    <FaHtml5 key={"icon"} />,
                    <FaCss3 key={"icon"} />,
                  ]}
                  shortDescription={
                    "Ecommerce solution for Prague based rental company specializing in renting caravans."
                  }
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
