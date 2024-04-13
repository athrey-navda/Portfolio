"use client";
import React, { useState } from "react";

const SnakesAndLadders = () => {
  const [playerPosition, setPlayerPosition] = useState(1);

  const SnakesAndLadders = {
    14: 4,
    19: 8,
    24: 16,
    3: 12,
    7: 17,
    11: 26,
  };

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const movePlayer = () => {
    const diceRoll = rollDice();
    const newPosition = playerPosition + diceRoll;

    const finalPosition = SnakesAndLadders[newPosition] || newPosition;
    setPlayerPosition(finalPosition);
  };

  return (
    <div className="mx-auto w-full max-w-md my-20 sm:my-4 flex min-h-screen justify-content-center items-center lg:max-w-7xl lg:px-8">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Snake and Ladder Game</h1>
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 border border-black relative">
            <div
              className="relative w-16 h-16 bg-blue-500 text-white rounded-full"
              style={{
                bottom: `${Math.floor((playerPosition - 1) / 5) * 20}%`,
                left: `${((playerPosition - 1) % 5) * 20}%`,
              }}
            >
              Player
            </div>

            {Object.keys(SnakesAndLadders).map((key) => (
              <div
                key={key}
                className="relative flex justify-center items-center bg-red-500 text-white rounded-full"
                style={{
                  bottom: `${
                    Math.floor((SnakesAndLadders[key] - 1) / 5) * 20
                  }%`,
                  left: `${((SnakesAndLadders[key] - 1) % 5) * 20}%`,
                  width: "2rem",
                  height: "2rem",
                }}
              >
                {key > SnakesAndLadders[key] ? "S" : "L"}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={movePlayer}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Roll Dice
        </button>
        <div className="mt-4">Player Position: {playerPosition}</div>
      </div>
    </div>
  );
};

export default SnakesAndLadders;
