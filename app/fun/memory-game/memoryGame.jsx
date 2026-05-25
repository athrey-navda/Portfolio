"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import confetti from "canvas-confetti";

const cardIcons = [
  "🎮", "🎲", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡"
];

export default function MemoryGame() {
  const { resolvedTheme } = useTheme();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const shuffleCards = () => {
    const shuffled = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon: icon,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setShowConfetti(false);
  };

  const startGame = () => {
    setGameStarted(true);
    shuffleCards();
  };

  const handleCardClick = (cardId) => {
    if (!gameStarted) return;
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (matchedCards.includes(cardId)) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards[firstId];
      const secondCard = cards[secondId];

      if (firstCard.icon === secondCard.icon) {
        setMatchedCards((prev) => [...prev, firstId, secondId]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setShowConfetti(true);
    }
  }, [matchedCards, cards]);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  const isGameWon = matchedCards.length === cards.length && cards.length > 0;

  return (
    <div>
      <div className="mx-auto w-full max-w-md my-4 flex justify-center items-center lg:max-w-7xl lg:px-8">
        <div className="flex flex-col">
          <div className="bg-transparent dark:bg-transparent p-5 lg:p-10 w-full">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-5 text-center">
                Memory Card Game
              </h1>
            </div>

            {!gameStarted ? (
              <div className="text-center">
                <p className="mb-4 text-lg">
                  Test your memory by matching pairs of cards!
                </p>
                <button
                  className={
                    resolvedTheme === "dark"
                      ? `white-btn rounded-lg px-6 py-3 hover:bg-transparent hover:text-white text-lg`
                      : `black-btn rounded-lg px-6 py-3 hover:bg-transparent hover:text-black text-lg`
                  }
                  onClick={startGame}
                >
                  Start Game
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">
                    Moves: {moves}
                  </div>
                  <button
                    className={
                      resolvedTheme === "dark"
                        ? `white-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-white`
                        : `black-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-black`
                    }
                    onClick={shuffleCards}
                  >
                    Restart
                  </button>
                </div>

                {isGameWon && (
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-500 dark:text-green-400">
                      🎉 You Won! 🎉
                    </div>
                    <div className="text-lg">
                      Completed in {moves} moves
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className={`aspect-square cursor-pointer rounded-lg flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl transition-all duration-300 ${
                        flippedCards.includes(card.id) || matchedCards.includes(card.id)
                          ? "bg-indigo-500 dark:bg-indigo-600 text-white rotate-0"
                          : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rotate-0"
                      } ${
                        matchedCards.includes(card.id)
                          ? "opacity-50 cursor-default"
                          : ""
                      }`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      {flippedCards.includes(card.id) || matchedCards.includes(card.id)
                        ? card.icon
                        : "?"}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <button
                    className={
                      resolvedTheme === "dark"
                        ? `white-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-white`
                        : `black-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-black`
                    }
                    onClick={() => setGameStarted(false)}
                  >
                    Back to Menu
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
