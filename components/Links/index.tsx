import styles from "./index.module.css";

import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Links() {
  return (
    <div className={styles.links}>
      <Link
        href="https://github.com/mAmineChniti"
        target="_blank"
        className={styles.link}
      >
        <FaGithub size={20} />
      </Link>
      <Link
        href="https://x.com/dada_buddha_"
        target="_blank"
        className={styles.link}
      >
        <FaXTwitter size={20} />
      </Link>
    </div>
  );
}
