"use client";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { useEffect, useCallback } from "react";

import {
  setGameStarted,
  setSnakeAndLadderGameData,
  setPlayerPosition,
  setDiceRoll,
  setDiceRollAgain,
  setIsGameOver,
  setMessage,
  setEachTurn,
  setCurrentPlayer,
} from "@/app/store/gameSlice.jsx";

import updateGameData from "@/app/api/updateGameData";

const SnakesAndLaddersRedux = () => {
  const { resolvedTheme } = useTheme();
  const dispatch = useDispatch();
  const {
    snakeAndLadderGameData,
    gameStarted,
    player1Position,
    player2Position,
    diceRoll,
    isGameOver,
    message,
    eachTurn,
    currentPlayer,
  } = useSelector((state) => state.snakeAndLadder);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/api/gameData");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      console.log("Fetched Data:", jsonData);

      if (jsonData && jsonData.games) {
        const snakeAndLadderGame = jsonData.games.find(
          (game) => game.name === "snake-and-ladder"
        );

        if (snakeAndLadderGame) {
          let total = 0;
          Object.values(snakeAndLadderGame.count).forEach((count) => {
            total += count;
          });
          console.log("Total Game Count:", total);

          dispatch(setSnakeAndLadderGameData(jsonData));
          dispatch(setGameStarted(true));
        } else {
          console.warn("Snake and Ladder game not found in data.");
        }
      } else {
        console.warn("Invalid data structure:", jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const startGame = async () => {
    setGameStarted(true);

    if (snakeAndLadderGameData !== null && snakeAndLadderGameData.games) {
      const todayDate = new Date().toLocaleDateString();
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
          const result = await updateGameData("snake-and-ladder", 1);
          console.log("API result:", result);
          fetchData();
        } catch (error) {
          console.error("Error updating game data:", error);
        }
      }
    }
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    dispatch(setDiceRoll(roll));
    return roll;
  };

  const movePlayer = () => {
    if (isGameOver) return;

    const roll = rollDice();

    if (roll === 6) {
      dispatch(setDiceRollAgain(true));
    }

    let newPosition =
      currentPlayer === 1 ? player1Position + roll : player2Position + roll;

    dispatch(
      setEachTurn(
        `Player ${currentPlayer} rolled ${roll} and moved to ${newPosition}!`
      )
    );

    let finalPosition = newPosition;

    if (SnakesAndLadders[newPosition]) {
      const newPositionType =
        SnakesAndLadders[newPosition] < newPosition ? "snake" : "ladder";
      finalPosition = SnakesAndLadders[newPosition];
      dispatch(
        setMessage(`Player ${currentPlayer} encountered a ${newPositionType}!`)
      );
    } else {
      dispatch(setMessage(""));
    }

    dispatch(
      setPlayerPosition({ player: currentPlayer, position: finalPosition })
    );

    if (finalPosition >= 100) {
      dispatch(setIsGameOver(true));
    }

    dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
  };

  const resetGame = () => {
    dispatch(setGameStarted(false));
    dispatch(setPlayerPosition({ player: 1, position: 0 }));
    dispatch(setPlayerPosition({ player: 2, position: 0 }));
    dispatch(setDiceRoll(null));
    dispatch(setIsGameOver(false));
    dispatch(setMessage(""));
    dispatch(setCurrentPlayer(1));
    dispatch(setDiceRollAgain(false));
    dispatch(setEachTurn(""));
  };

  const renderGrid = () => {
    const rows = 10;
    const cols = 10;
    let cells = [];

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
                <div className="absolute w-4 h-4 bg-black text-white rounded-full text-xs flex justify-center items-center">
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
              Total Snake and Ladder Game:{" "}
              {Object.values(
                snakeAndLadderGameData?.games?.find(
                  (game) => game.name === "snake-and-ladder"
                )?.count || {}
              ).reduce((total, count) => total + count, 0)}
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
                <div className="text-center mt-4">
                  <p>Player 1 Position: {player1Position}</p>
                  <p>Player 2 Position: {player2Position}</p>
                  <p>{diceRoll && <>Dice Roll: {diceRoll}</>}</p>
                  <p>{eachTurn}</p>
                  <p>{message}</p>
                  {isGameOver && <p>Game Over! Player {currentPlayer} wins!</p>}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SnakesAndLaddersRedux;
