import React, { useState, useEffect } from "react";
import TechCard from "../components/TechCards";
import techCardsData from "./techCards.json";

function Portfolio({ theme }) {
  const [selectedCard, setSelectedCard] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSelectedCard(techCardsData.techCards[0]);
  }, []);

  const showDesc = (index, card) => {
    setActiveIndex(index);
    setSelectedCard(card);
  };

  return (
    <section
      className={`p-5 md:p-10 flex flex-col items-center justify-center container mx-auto relative ${theme}`}
    >
      <h1 className="text-base md:text-2xl font-popins uppercase text-center text-balance">
        <span className="text-violet-500">Tech Stack</span> Used for Developing
        & deploying this website
      </h1>
      <div className="flex flex-row items-center justify-between sm:justify-around gap-4 w-4/5 mt-10">
        {techCardsData.techCards.map((card, index) => (
          <TechCard
            key={index}
            logo={card.logo}
            altText={card.altText}
            isActive={index === activeIndex}
            className={card.altText.toLowerCase()}
            onClick={() => showDesc(index, card)}
          />
        ))}
      </div>
      <div className="w-11/12 bg-dark bg-opacity-10 rounded-xl p-5">
        <h1 className=" text-violet-500 text-xl mb-2 uppercase">
          {selectedCard.altText}
        </h1>
        <p className="text-justify">{selectedCard.description}</p>
      </div>
    </section>
  );
}

export default Portfolio;
