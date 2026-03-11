import styles from "./form.module.css";

export function Form({ children }) {
  return <form className={styles.form}>{children}</form>;
}
