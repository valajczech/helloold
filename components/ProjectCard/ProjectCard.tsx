import Image, { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.scss";

interface IProjectCardProps {
  title: string;
  shortDescription: string;
  number: string;
  techstack?: Array<JSX.Element>;
  img: string | StaticImageData;
  inProgress: boolean;
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
      <div className="desc">{props.shortDescription}</div>
      <div className={styles.image}>
        <Image src={props.img} />
      </div>
    </div>
  );
};

export default ProjectCard;
