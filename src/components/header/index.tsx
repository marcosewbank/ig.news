import React from "react";
import { SingInButton } from "../SingInButton";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
