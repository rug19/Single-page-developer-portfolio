import Main from "../Main/Main";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.container}>
      <h2 className={styles.titulo}>adamKeyes</h2>
      <nav className={styles.iconsContainer}>
        <a href="">
          <img src="/images/icon-github.svg" alt="icon-gitub" />
        </a>
        <a href="">
          <img
            src="/images/icon-frontend-mentor.svg"
            alt="icon-front-end-mentor"
          />
        </a>
        <a href="">
          <img src="/images/icon-linkedin.svg" alt="icon-linedin"/>
        </a>
        <a href="">
          <img src="/public/images/icon-twitter.svg" alt="icon-twitter" />
        </a>
        
      </nav>
      <Main></Main>
    </header>
  );
}
