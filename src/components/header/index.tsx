import React from "react";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a className={styles.active}>Posts</a>
        </nav>
      </div>
    </header>
  );
}
