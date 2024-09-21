import Link from "next/link";
import styles from "./index.module.css";

type CardProps = {
  projectUrl: string;
  img: string;
  title: string;
  description: string;
};

export default function Card({
  projectUrl,
  img,
  description,
  title,
}: CardProps) {
  return (
    <div className={styles.projectCard}>
      <Link className={styles.linkWrapper} href={projectUrl} target="_blank">
        <img className={styles.projectImage} src={img} alt="Project" />
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
      </Link>
    </div>
  );
}
