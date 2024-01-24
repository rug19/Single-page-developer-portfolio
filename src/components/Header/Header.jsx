import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.container}>
      <h2 className={styles.titulo}>ruanGomes</h2>
      <nav className={styles.iconsContainer}>
        <a href="">
          <img src="/public/images/icon-github.svg" alt="icon-gitub" />
        </a>
        <a href="">
          <img
            src="/public/images/icon-frontend-mentor.svg"
            alt="icon-front-end-mentor"
          />
        </a>
        <a href="">
          <img src="/public/images/icon-linkedin.svg" alt="icon-linedin" />
        </a>
      </nav>
      <div className={styles.box}>
        <img className={styles.photo} src="/public/images/image-profile-mobile.webp" alt="image-mobile" />
      </div>
    </header>
  );
}
