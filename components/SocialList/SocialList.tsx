import styles from "./SocialList.module.scss";

import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const SocialList = () => {
  return (
    <div className={styles.socialList}>
      <span className={styles.header_small}>You can find me here</span>
      <div className={styles.list}>
        <Link target={"_blank"} href={"https://github.com/valajczech"}>
          <FaGithub />
        </Link>
        <Link target={"_blank"} href={"https://gitlab.com/jiri.vala11"}>
          <FaGitlab />
        </Link>
        <Link href={"https://www.instagram.com/valaj_/"} target={"_blank"}>
          <FaInstagram />
        </Link>
        <Link href={"tel:+420774460131"} target={"_blank"}>
          <FaPhone />
        </Link>
        <Link href={"mailto:jiri.vala11@gmail.com"} target={"_blank"}>
          <FaMailBulk />
        </Link>
        <Link
          href={"/https://www.linkedin.com/in/ji%C5%99%C3%AD-vala-b7261b1ab/"}
          target={"_blank"}
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default SocialList;
