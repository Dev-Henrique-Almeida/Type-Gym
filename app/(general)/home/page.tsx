"use client";
import Header from "@/components/header/header";
import styles from "./page.module.scss";
import Footer from "@/components/footer/footer";
import logo from "../../../public/assets/Pessoas.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>GYM</h1>
        {/*  <div className={styles.image}>
          <img src={logo.src} alt="Logo" />
        </div> */}
      </div>
      <Footer />
    </>
  );
}
