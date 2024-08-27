import React, { useState, useEffect, useCallback } from "react";
import TechCard from "../components/TechCards";
import Cookies from "js-cookie";
import { FaInfoCircle } from "react-icons/fa";

function Portfolio({ theme }) {
  const [techCards, setTechCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingDesc, setLoadingDesc] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTechCards = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.REACT_APP_PUBLIC_API}/techs/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTechCards(data);
        setSelectedCard(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTechCards();
  }, []);

  const fetchDescription = useCallback(async (card) => {
    const cachedDesc = Cookies.get(`techCard-${card._id}`);
    if (cachedDesc) {
      const { description, timestamp } = JSON.parse(cachedDesc);
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        setSelectedCard((prevCard) => ({
          ...prevCard,
          description,
        }));
        return;
      }
    }

    setLoadingDesc(true);

    try {
      const response = await fetch(
        `${import.meta.env.REACT_APP_PUBLIC_API}/techs/${card._id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      Cookies.set(
        `techCard-${card._id}`,
        JSON.stringify({
          description: data.description,
          timestamp: Date.now(),
        }),
        { expires: 5 / 1440 }
      );
      setSelectedCard((prevCard) => ({
        ...prevCard,
        description: data.description,
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingDesc(false);
    }
  }, []);

  const showDesc = (index, card) => {
    setActiveIndex(index);
    setSelectedCard(card);
    fetchDescription(card);
  };

  return (
    <section
      className={`p-5 md:p-10 flex flex-col items-center justify-center container mx-auto relative`}
    >
      <h1 className="text-base md:text-2xl font-popins uppercase text-center text-balance">
        <span className="text-violet-500">Tech Stack</span> Used for Developing
        & deploying this website
      </h1>

      {loading && (
        <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5 animate-pulse ">
          <FaInfoCircle className="inline mb-[.2rem] mr-2 animate-ping" />
          Loading Tech Stacks...
        </p>
      )}

      {error && (
        <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5 ">
          <FaInfoCircle className="inline mb-[.2rem] mr-2 " />
          An error occurred: {error} , please try refreshing the page!
        </p>
      )}

      {!loading && !error && (
        <div className="flex flex-row items-center justify-between sm:justify-around w-4/5 mt-10">
          {techCards.map((card, index) => (
            <TechCard
              key={card._id}
              logo={card.logo}
              altText={card.altText}
              isActive={index === activeIndex}
              className={card.altText.toLowerCase()}
              onClick={() => showDesc(index, card)}
            />
          ))}
        </div>
      )}

      <div className="w-11/12 bg-dark bg-opacity-10 rounded-xl p-5">
        {loadingDesc && (
          <p className="font-roboto animate-pulse">Loading description...</p>
        )}
        {!loadingDesc && (
          <>
            <h1 className="text-violet-500 md:text-xl mb-2 uppercase font-popins">
              {selectedCard.altText}
            </h1>
            <p className="text-[.92rem] sm:text-base text-justify md:text-pretty font-roboto">
              {selectedCard.description ||
                "Click on the Icon to see the description :)"}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
