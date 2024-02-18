import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.box}>
      <div >
        <img
          className={styles.photo}
          src="/public/images/image-profile-mobile.webp"
          alt="image-mobile"
        />
      </div>
      <h1 className={styles.titulo}>Nice to meet you! I'm Ruan Gomes.
      </h1>
    </main>
  );
}
