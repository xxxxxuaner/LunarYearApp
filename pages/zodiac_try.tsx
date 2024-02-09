// pages/index.tsx

import { useState } from "react";
import Link from "next/link";
import zodiacData from "../public/zodiacData.json"; // Adjust the path to your JSON file

const ChineseZodiac = () => {
  const [birthDate, setBirthDate] = useState<string>("");
  const [zodiacSign, setZodiacSign] = useState<string | null>(null);
  const [zodiacImageUrl, setZodiacImageUrl] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const calculateZodiacSign = () => {
    if (validateDate(birthDate)) {
      const birthDateObj = new Date(birthDate);

      for (const { element, sign, start, end, imageUrl } of zodiacData) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (birthDateObj >= startDate && birthDateObj <= endDate) {
          setZodiacSign(element + " " + sign);
          setZodiacImageUrl(imageUrl);

          return;
        }
      }

      setZodiacSign(null); // If no match found
    } else {
      setZodiacSign(null); // Invalid date
    }
  };

  const validateDate = (date: string): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  };

  return (
    <div>
      <h1>Chinese Zodiac Calculator</h1>
      <label>
        Enter your birth date (YYYY-MM-DD):
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="e.g., 1990-01-01"
        />
      </label>
      <button onClick={calculateZodiacSign}>Calculate</button>
      {zodiacSign !== null ? (
        <div>
          <p>Your Chinese Zodiac sign is: {zodiacSign}</p>
          {zodiacImageUrl !== null && (
            <img
              src={zodiacImageUrl}
              alt={`${zodiacSign} Zodiac`}
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
        </div>
      ) : (
        <p>Please enter a valid birth date.</p>
      )}
      {/* Add a button to navigate to the next page */}
      <Link href="/luckpot">
        <button>See your role in 2024</button>
      </Link>
    </div>
  );
};

export default ChineseZodiac;
