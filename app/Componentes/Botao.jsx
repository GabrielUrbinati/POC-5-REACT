import styles from './Botao.module.css';

export default function Botao({ onClick }) {
  return (
    <button className={styles.botao} onClick={onClick}>
      Gerar Frase
    </button>
  );
}
