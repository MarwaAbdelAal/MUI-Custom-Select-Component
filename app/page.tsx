import CustomSelect from "@/components/CustomSelect";
import styles from "./page.module.scss";

const weekdays = [
  { key: "monday", value: "Monday" },
  { key: "tuesday", value: "Tuesday" },
  { key: "wednesday", value: "Wednesday" },
  { key: "thursday", value: "Thursday" },
  { key: "friday", value: "Friday" },
  { key: "saturday", value: "Saturday" },
  { key: "sunday", value: "Sunday" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <CustomSelect options={weekdays} label="Day" />
      <CustomSelect options={weekdays} label="Days" multiple />
    </main>
  );
}
