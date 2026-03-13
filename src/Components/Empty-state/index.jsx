import styles from "./empty-state.module.css";

export function EmptyState() {
  return (
    <section className={styles.empty}>
      <p>Não há nada a ser exibido aqui.</p>
      <img src="/empty.png" alt="Não há nada a ser exibido" />
    </section>
  );
}
