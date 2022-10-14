import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink text="home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};
