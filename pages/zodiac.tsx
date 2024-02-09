import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import zodiacData from "../public/zodiacData.json"; // Adjust the path to your JSON file

const ZodiacPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const { birthdate } = router.query;

  const [zodiacSign, setZodiacSign] = useState<string | null>(null);
  const [zodiacImageUrl, setZodiacImageUrl] = useState<string | null>(null);
  const [zodiacTrait1, setZodiacTrait1] = useState<string | null>(null);
  const [zodiacTrait2, setZodiacTrait2] = useState<string | null>(null);

  useEffect(() => {
    const calculateZodiacSign = () => {
      if (birthdate) {
        if (validateDate(String(birthdate))) {
          const birthDateObj = new Date(String(birthdate));

          for (const {
            element,
            sign,
            start,
            end,
            imageUrl,
            trait1,
            trait2,
          } of zodiacData) {
            const startDate = new Date(start);
            const endDate = new Date(end);

            if (birthDateObj >= startDate && birthDateObj <= endDate) {
              setZodiacSign(element + " " + sign);
              setZodiacImageUrl(imageUrl);
              setZodiacTrait1(trait1);
              setZodiacTrait2(trait2);

              return;
            }
          }

          setZodiacSign(null); // If no match found
        } else {
          setZodiacSign(null); // Invalid date
        }
      }
    };

    calculateZodiacSign();
  }, [birthdate]);

  const validateDate = (date: string): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
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
          <h1 className={styles.title}>Your Zodiac Animal is</h1>
        </div>

        {birthdate ? (
          <div>
            <div className={styles.imageContainer}>
              {zodiacImageUrl !== null && (
                <img
                  className={styles.zodiacImage}
                  src={zodiacImageUrl}
                  alt={`${zodiacSign} Zodiac`}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
            </div>
            <p className={styles.zodiacName}>{zodiacSign}!</p>

            <div className={styles.traitsection}>
              <p className={styles.traitsubtitle}>{zodiacTrait1}</p>
              <img
                src="/decor/fried dumpling.jpeg"
                alt="Dumpling"
                style={{ maxWidth: "10%", maxHeight: "200px" }}
              />
              <p className={styles.traitsubtitle}>{zodiacTrait2}</p>
            </div>
          </div>
        ) : (
          <p className={styles.traitsection}>
            Please provide a valid birthdate.
          </p>
        )}

        <div className={styles.buttoncontainer}>
          <Link href="/luckpot">
            <button className={styles.button}>
              <span className={styles.text}>Draw your fortune stick!</span>
              <img src="/decor/next.svg" alt="Next"></img>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ZodiacPage;
