import CustomSelect from "@/components/CustomSelect";
import styles from "./page.module.scss";
import { weekdays } from "@/data/weekDays";

export default function Home() {
  return (
    <main className={styles.main}>
      <CustomSelect options={weekdays} label="Day" />
      <CustomSelect options={weekdays} label="Days" multiple />
    </main>
  );
}
