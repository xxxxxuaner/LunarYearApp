import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

interface Line {
  number: number;
  luck: string;
  rank: string;
}

const getRandomLuck = (lines: Line[]) => {
  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
};

const Home = () => {
  const [randomLuck, setRandomLuck] = useState<Line | null>(null);

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchRandomLuck = async () => {
      try {
        const response = await fetch("/luckRole.json");
        const lines: Line[] = await response.json();
        const line = getRandomLuck(lines);
        setRandomLuck(line);
        localStorage.setItem("randomLuck", JSON.stringify(line)); // Store random luck in local storage
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomLuck(); // Call the function to fetch random luck when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className={styles.container}>
      <div className={styles.luckrankbg2}></div>
      <div className={styles.luckrankbg3}></div>
      <div className={styles.luckrankbg4}></div>
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
          <h1 className={styles.title}>Your 2024 Fortune is</h1>
        </div>
        <div className = {styles.layer}>
          {randomLuck && (
            <div>
              <p className={styles.luckname}>{randomLuck.luck}</p>
            </div>
          )}
        </div>
        <Link href="/luckrank">
          <div className={styles.buttoncontainer}>
            <button className={styles.button}>
              <span className={styles.text}>Find your 2024 fortune power!</span>
              <img src="/decor/next.svg" alt="Next"></img>
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;
