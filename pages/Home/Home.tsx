import Head from 'next/head';
import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>GYM</h1>
        <div className={style.image}></div>
      </div>
    </>
  );
}
