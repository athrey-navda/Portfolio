"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

export default function SnakesAndLadders() {
  const { resolvedTheme } = useTheme();
  const [player1Position, setPlayer1Position] = useState(0);
  const [player2Position, setPlayer2Position] = useState(0);
  const [diceRoll, setDiceRoll] = useState(null);
  const [diceRollAgain, setDiceRollAgain] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [eachTurn, setEachTurn] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [snakeAndLadderGameData, setSnakeAndLadderGameData] = useState(null);
  const [snakeAndLadderCount, setSnakeAndLadderCount] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/api/gameData");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setSnakeAndLadderGameData(jsonData);

      if (jsonData && jsonData.games) {
        let total = 0;
        jsonData.games.forEach((game) => {
          if (game.name === "snake-and-ladder") {
            Object.values(game.count).forEach((count) => {
              total += count;
            });
          }
        });
        setSnakeAndLadderCount(total);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

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

  const startGame = async () => {
    setGameStarted(true);
    if (snakeAndLadderGameData !== null && snakeAndLadderGameData.games) {
      const todayDate = new Date().toLocaleDateString();
      console.log(snakeAndLadderGameData);

      const snakeAndLadderGame = snakeAndLadderGameData.games.find(
        (game) => game.name === "snake-and-ladder"
      );

      if (snakeAndLadderGame) {
        if (snakeAndLadderGame.count[todayDate]) {
          snakeAndLadderGame.count[todayDate] += 1;
        } else {
          snakeAndLadderGame.count[todayDate] = 1;
        }

        setSnakeAndLadderGameData({
          ...snakeAndLadderGameData,
          games: snakeAndLadderGameData.games.map((game) =>
            game.name === "snake-and-ladder" ? snakeAndLadderGame : game
          ),
        });

        try {
          const response = await fetch("/api/updateGameData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gameName: "snake-and-ladder", count: 1 }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          await fetchData();
        } catch (error) {
          console.error("Error updating game data:", error);
        }
      }
    }
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    return roll;
  };

  const movePlayer = () => {
    if (isGameOver) return;

    if (diceRollAgain) {
      const roll = rollDice();

      if (roll === 6) {
        setDiceRollAgain(true);
      } else {
        setDiceRollAgain(false);
      }

      let newPosition =
        currentPlayer === 1 ? player1Position + roll : player2Position + roll;

      setEachTurn(
        `Player ${currentPlayer} rolled ${roll} and moved to ${newPosition}!`
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
    } else {
      // First roll of the turn
      const roll = rollDice();

      if (roll === 6) {
        setDiceRollAgain(true);
      } else {
        setDiceRollAgain(false);
      }

      let newPosition =
        currentPlayer === 1 ? player1Position + roll : player2Position + roll;

      setEachTurn(
        `Player ${currentPlayer} rolled ${roll} and moved to ${newPosition}!`
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
    }
  };

  const resetGame = () => {
    setGameStarted(false);
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
                <div className="p-1 bg-red-500 text-white rounded-full text-xs flex justify-center items-center">
                  S<span className="text-xs mx-1"> start</span>
                </div>
              )}
              {isLadderStart && (
                <div className="p-1 bg-green-500 text-white rounded-full text-xs flex justify-center items-center">
                  L<span className="text-xs mx-1"> start</span>
                </div>
              )}
              {isSnakeEnd && (
                <div className="p-1 bg-red-500 text-white rounded-full text-xs flex justify-center items-center">
                  S<span className="text-xs mx-1"> end</span>
                </div>
              )}
              {isLadderEnd && (
                <div className="p-1 bg-green-500 text-white rounded-full text-xs flex justify-center items-center">
                  L<span className="text-xs mx-1"> end</span>
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
    <>
      <div className="mx-auto w-full max-w-md flex my-4 justify-center items-center lg:max-w-7xl lg:px-8">
        <div className="flex flex-col">
          <div className="container mx-auto">
            <div className="text-center ">
              Total Snake and Ladder Game: {snakeAndLadderCount}
            </div>
            <h1 className="text-3xl font-bold mb-4 text-center">
              Snake and Ladder Game
            </h1>
            <div>{renderGrid()}</div>
            {!gameStarted && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={startGame}
                  className={
                    resolvedTheme === "dark"
                      ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                      : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                  }
                >
                  Start Game
                </button>
              </div>
            )}
            {gameStarted && (
              <>
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
              </>
            )}
          </div>

          <div>{message && <div className="text-center">{message}</div>}</div>
        </div>
      </div>
    </>
  );
}
