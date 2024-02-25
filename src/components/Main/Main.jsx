import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.box}>
      <div className={styles.centeredContainer}>
        <img
          className={styles.photo}
          src="/public/images/image-profile-mobile.webp"
          alt="image-mobile"
        />
        <div>
          <h1 className={styles.titulo}>
            <span className={styles.upperTitulo}>Nice to meet you!</span> I’m{" "}
            <span>Adam Keyes.</span>
          </h1>
          <p className={styles.paragraphMain}>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <h3 className={styles.subTitle}>CONTACT ME</h3>
        </div>
      </div>
    </main>
  );
}
