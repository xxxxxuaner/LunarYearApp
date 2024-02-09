import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the second page with the birthdate query parameter
    router.push(`/zodiac?birthdate=${encodeURIComponent(birthdate)}`);
  };
  return (
    <div className={styles.container1}>
      <Head>
        <title>Info</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.bigtitle}>Accent Extraordinary Fortune</h1>
          <h2 className={styles.bigsubtitle}>2024 Lunar New Year</h2>
        </div>

        <div>
          <h1 className={styles.subtitle}>Enter Your Birthdate</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <h2 className={styles.bigsubtitle2}>Handmade by Accent Temple</h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
