import Image, { StaticImageData } from "next/image";
import Button from "../Button/Button";
import styles from "./ProjectCard.module.scss";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import Link from "next/link";

interface IProjectCardProps {
  title: string;
  shortDescription?: string;
  number: string;
  techstack?: Array<JSX.Element>;
  img: string | StaticImageData;
  inProgress: boolean;
  demoURL?: string;
}

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.top}>
        <span>{props.number}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.tags}>
          {props.inProgress ? (
            <span className={styles.inProgress}>In progress</span>
          ) : (
            <span className={styles.completed}>Completed</span>
          )}
          {" · "}
          <div className={styles.techstack}>
            {props.techstack?.map((i) => {
              return i;
            })}
          </div>
        </div>
      </div>
      <div className={styles.desc}>{props.shortDescription}</div>
      <div className={styles.image}>
        <Image src={props.img} />
      </div>
      <div className={styles.readMore}>
        {props.demoURL !== undefined ? (
          <a href={props.demoURL} target={"_blank"} rel="noreferrer">
            <span>
              {" "}
              <FaLink />
              Live demo
            </span>
          </a>
        ) : (
          ""
        )}
        <Link href={""}>
          <span>
            <FaInfoCircle />
            Learn more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
