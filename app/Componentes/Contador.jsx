import styles from "./Contador.module.css"; 
export default function Contador({ contagem }) {
  return <p className={styles.contador}>Você já gerou {contagem} frases!</p>; // Aplica a classe CSS ao <p>
}
