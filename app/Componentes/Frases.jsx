import styles from "./Frases.module.css";

export default function Frases({ texto }) {
  return <p className={styles.frase}>{texto}</p>;
}
