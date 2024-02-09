import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

interface Line {
  number: number;
  luck: string;
  rank: string;
}

const Home = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const [randomLuck, setRandomLuck] = useState<Line | null>(null);

  useEffect(() => {
    const storedRandomLuck = localStorage.getItem("randomLuck");
    if (storedRandomLuck) {
      const parsedRandomLuck: Line = JSON.parse(storedRandomLuck);
      setRandomLuck(parsedRandomLuck);
    }
  }, []);

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
        <div className={styles.luckrankbg1}></div>
        <div className={styles.luckrankbg5}></div>

        <div className={styles.header}>
          <a href="#" onClick={handleGoBack} className="back-button">
            <img src="/decor/backbutton.svg" alt="Go Back"></img>
          </a>
          <h1 className={styles.title}>Your Fortune Rank is</h1>
        </div>

        <div className={styles.layer}>
          {randomLuck && (
            <div>
              <p className={styles.ranknumber}>{randomLuck.number}</p>
              <p className={styles.subranknumber}>Out of 88 Luck</p>
              <p className={styles.zodiacName}>{randomLuck.rank}</p>
            </div>
          )}
        </div>

        <Link href="/info">
          <div className={styles.buttoncontainer}>
            <button className={styles.button}>
              <span className={styles.text}>Know more info!</span>
              <img src="/decor/next.svg" alt="Next"></img>
            </button>
          </div>
        </Link>
        <div>
          <p className={styles.subranknumber}></p>
        </div>
        
      </main>
    </div>
  );
};

export default Home;
