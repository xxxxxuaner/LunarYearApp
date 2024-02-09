import { useState } from "react";
import Link from "next/link";

interface Fuzhou {
  content: string;
  imageUrl: string;
}

const getRandomFu = (fuzhous: Fuzhou[]) => {
  const randomIndex = Math.floor(Math.random() * fuzhous.length);
  return fuzhous[randomIndex];
};

const Home = () => {
  const [randomFu, setRandomFu] = useState<Fuzhou | null>(null);

  const handleRandomFu = async () => {
    try {
      const response = await fetch("/amuletData.json");
      const fuzhous: Fuzhou[] = await response.json();
      const fuzhou = getRandomFu(fuzhous);
      setRandomFu(fuzhou);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1> A lottery gift </h1>
      <button onClick={handleRandomFu}>Get a Daoism amulet</button>
      {randomFu && (
        <div>
          <p>Content: {randomFu.content}</p>
          <img
            src={randomFu.imageUrl}
            alt="Random Fu"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
      <p>
        Please screenshot this page and go to instagram account's chat to claim
        your luck :)))
      </p>

    </div>
  );
};

export default Home;
