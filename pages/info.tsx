import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Info</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <a href="#" onClick={handleGoBack} className="back-button">
            <img src="/decor/backbutton.svg" alt="Go Back"></img>
          </a>

          <h1 className={styles.title}>Info</h1>
        </div>
        <div>
          <h2 className={styles.subtitle}>Why Ranking?</h2>
          <p className={styles.description}>
            According to "History of the Heart", written by Zheng Sixiao in the
            Song Dynasty, there was a ranking among different jobs and social
            roles in ancient China, it goes like this: "First, officials;
            second, clerks; third, monks; fourth, Taoists; fifth, physicians;
            sixth, workers; seventh, hunters; eighth, prostitutes; ninth,
            scholars; tenth, beggars." During the Yuan Dynasty, rulers
            classified people into ten categories, with the top being
            high-ranking officials, followed by lower-level government
            officials, monks, itinerant preachers, medical practitioners,
            workers, hunters, prostitutes, scholars, and lastly beggars. This
            classification later came to symbolize the discrimination and
            mistreatment faced by intellectuals.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
