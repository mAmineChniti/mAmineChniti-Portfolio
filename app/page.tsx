import Links from "@/components/Links";
import Carousel from "@/components/Carousel";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.aboutContainer}>
          <span className={styles.name}>mAmineChniti</span>
          <span className={styles.title}>Software Engineer</span>
        </div>
        <div className={styles.linksContainer}>
          <Links />
        </div>
        <Carousel />
      </main>
      <Sidebar />
    </>
  );
}
