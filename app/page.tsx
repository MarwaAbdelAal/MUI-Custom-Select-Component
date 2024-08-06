import CustomSelect from "@/components/CustomSelect";
import styles from "./page.module.scss";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <CustomSelect options={weekdays} label="Weekday" />
    </main>
  );
}
