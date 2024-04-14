"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

const SnakesAndLadders = () => {
  const { resolvedTheme } = useTheme();
  const [player1Position, setPlayer1Position] = useState(0);
  const [player2Position, setPlayer2Position] = useState(0);
  const [diceRoll, setDiceRoll] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [eachTurn, setEachTurn] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const SnakesAndLadders = {
    14: 4,
    39: 12,
    24: 16,
    11: 26,
    35: 48,
    50: 62,
    54: 75,
    30: 10,
    44: 20,
    87: 32,
    97: 33,
  };

  useEffect(() => {
    renderGrid();
  }, [player1Position, player2Position]);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    return roll;
  };

  const movePlayer = () => {
    if (isGameOver) return;

    const roll = rollDice();

    let newPosition =
      currentPlayer === 1 ? player1Position + roll : player2Position + roll;

    setEachTurn(
      `Player ${currentPlayer}  rolled ${roll} and moved to ${newPosition}!`
    );

    let finalPosition = newPosition;

    if (SnakesAndLadders[newPosition]) {
      const newPositionType =
        SnakesAndLadders[newPosition] < newPosition ? "snake" : "ladder";
      finalPosition = SnakesAndLadders[newPosition];
      setMessage(`Player ${currentPlayer} encountered a ${newPositionType}!`);
    } else {
      setMessage("");
    }

    if (currentPlayer === 1) {
      setPlayer1Position(finalPosition);
    } else {
      setPlayer2Position(finalPosition);
    }

    if (finalPosition >= 100) {
      setIsGameOver(true);
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const resetGame = () => {
    setPlayer1Position(0);
    setPlayer2Position(0);
    setDiceRoll(null);
    setIsGameOver(false);
    setMessage("");
    setCurrentPlayer(1);
  };

  const renderGrid = () => {
    let cells = [];
    const rows = 10;
    const cols = 10;

    function printSnakingNumbers(rows, cols) {
      for (let row = 1; row <= rows; row++) {
        let rowData = [];
        if (row % 2 !== 0) {
          for (let col = 1; col <= cols; col++) {
            rowData.push((row - 1) * cols + col);
          }
        } else {
          for (let col = cols; col >= 1; col--) {
            rowData.push((row - 1) * cols + col);
          }
        }
        cells.push(rowData);
      }

      cells.reverse();
    }

    printSnakingNumbers(rows, cols);

    return cells.map((row, rowIndex) => (
      <div className="flex" key={rowIndex}>
        {row.map((cell, colIndex) => {
          let isSnakeStart = false;
          let isSnakeEnd = false;
          let isLadderStart = false;
          let isLadderEnd = false;

          Object.entries(SnakesAndLadders).forEach(([start, end]) => {
            if (Number(start) > Number(end)) {
              if (Number(start) === cell) isSnakeStart = true;
              if (Number(end) === cell) isSnakeEnd = true;
            } else {
              if (Number(start) === cell) isLadderStart = true;
              if (Number(end) === cell) isLadderEnd = true;
            }
          });

          return (
            <div
              key={colIndex}
              className="border border-gray-500 flex justify-center items-center w-10 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 relative"
              style={{
                backgroundColor: cell % 2 === 0 ? "#F3F4F6" : "#E5E7EB",
              }}
            >
              {isSnakeStart && (
                <div className="absolute top-0 left-0 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex justify-center items-center">
                  S
                </div>
              )}
              {isLadderStart && (
                <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 text-white rounded-full text-xs flex justify-center items-center">
                  L
                </div>
              )}
              {isSnakeEnd && (
                <div className="absolute top-0 left-0 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex justify-center items-center">
                  S
                </div>
              )}
              {isLadderEnd && (
                <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 text-white rounded-full text-xs flex justify-center items-center">
                  L
                </div>
              )}
              {cell === player1Position && (
                <div className="absolute w-4 h-4 bg-yellow-500 text-black rounded-full text-xs flex justify-center items-center">
                  Player 1
                </div>
              )}
              {cell === player2Position && (
                <div className="absolute w-4 h-4 bg-black text-black rounded-full text-xs flex justify-center items-center">
                  Player 2
                </div>
              )}
              <div
                className="absolute text-black"
                style={{ bottom: "0.2rem", right: "0.2rem" }}
              >
                {cell}
              </div>
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="mx-auto w-full max-w-md my-20 sm:my-4 flex min-h-screen justify-center items-center lg:max-w-7xl lg:px-8">
      <div className="flex flex-col">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Snake and Ladder Game
          </h1>
          <div>{renderGrid()}</div>
          <div className="flex justify-center mt-4 gap-x-4">
            <button
              onClick={movePlayer}
              className={
                resolvedTheme === "dark"
                  ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                  : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
              }
              disabled={isGameOver}
            >
              Roll Dice
            </button>
            <button
              onClick={resetGame}
              className={
                resolvedTheme === "dark"
                  ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                  : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
              }
            >
              Reset Game
            </button>
          </div>
          <div className="mt-4 text-center">
            {isGameOver
              ? "Game Over! Player wins!"
              : diceRoll
              ? eachTurn && <div className="text-center">{eachTurn}</div>
              : "Click 'Roll Dice' to start"}
          </div>
        </div>
        <div>{message && <div className="text-center">{message}</div>}</div>
      </div>
    </div>
  );
};

export default SnakesAndLadders;
