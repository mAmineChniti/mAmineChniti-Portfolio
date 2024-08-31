import styles from "./index.module.css";
import { Checkbox } from "@/components/ui/checkbox";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Checkbox className={styles.sidebarCheckbox} />
      <span className={styles.sidebarText}>DARK</span>
    </div>
  );
}
