import Image, { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.scss";

interface IProjectCardProps {
  title: string;
  shortDescription: string;
  number?: string;
  img: string | StaticImageData;
}

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.top}>
        <span>{props.number}</span>
      </div>
      <div className={styles.info}>
        <span className="title">{props.title}</span>
      </div>
      <div className={styles.image}>
        <Image src={props.img} />
      </div>
    </div>
  );
};

export default ProjectCard;
