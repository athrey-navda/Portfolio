"use client";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import confetti from "canvas-confetti";

export default function Tictactoe() {
  const { resolvedTheme } = useTheme();
  const initialBoard = Array(9).fill(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [boardHistory, setBoardHistory] = useState([initialBoard]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAgainstComputer, setIsAgainstComputer] = useState(false);
  const [ticTacToeData, setTicTacToeData] = useState(null);
  const [ticTacToeCount, setTicTacToeCount] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/api/gameData");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setTicTacToeData(jsonData);

      let total = 0;

      if (Array.isArray(jsonData)) {
        const ticTacToeGame = jsonData.find(
          (game) => game.name === "tic-tac-toe"
        );
        if (ticTacToeGame) {
          total = Object.values(ticTacToeGame.count).reduce(
            (acc, count) => acc + count,
            0
          );
        }
      }

      setTicTacToeCount(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const startGame = async () => {
    setGameStarted(true);
    setBoardHistory([initialBoard]);
    setStepNumber(0);
    setXIsNext(true);
    setShowConfetti(false);

    if (ticTacToeData) {
      const todayDate = new Date().toLocaleDateString();
      const ticTacToeGame = ticTacToeData.find(
        (game) => game.name === "tic-tac-toe"
      );

      if (ticTacToeGame) {
        ticTacToeGame.count = ticTacToeGame.count || {};
        ticTacToeGame.count[todayDate] =
          (ticTacToeGame.count[todayDate] || 0) + 1;
        setTicTacToeData([...ticTacToeData]);

        try {
          const response = await fetch("/api/updateGameData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gameName: "tic-tac-toe", count: 1 }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          await fetchData();
        } catch (error) {
          console.error("Error updating game data:", error);
        }
      } else {
        console.error("Tic-tac-toe game data not found.");
      }
    } else {
      console.error("Tic-tac-toe data is not available.");
    }
  };

  const handleClick = (i) => {
    if (!gameStarted) return;

    const newHistory = boardHistory.slice(0, stepNumber + 1);
    const currentBoard = newHistory[newHistory.length - 1];
    const newBoard = [...currentBoard];

    if (calculateWinner(newBoard) || newBoard[i]) {
      return;
    }

    newBoard[i] = xIsNext ? "X" : "O";

    setBoardHistory(newHistory.concat([newBoard]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const makeComputerMove = () => {
    const currentBoard = boardHistory[stepNumber];
    const newBoard = [...currentBoard];
    const computerSymbol = "O";

    const bestMove = minimax(newBoard, computerSymbol).index;
    newBoard[bestMove] = computerSymbol;

    setBoardHistory((prevHistory) => [...prevHistory, newBoard]);
    setStepNumber((prevStep) => prevStep + 1);
    setXIsNext(true);
  };

  const minimax = (board, player) => {
    const humanPlayer = "X";
    const computerSymbol = "O";

    const winner = calculateWinner(board);
    if (winner === computerSymbol) {
      return { score: 10 };
    } else if (winner === humanPlayer) {
      return { score: -10 };
    } else if (isBoardFull(board)) {
      return { score: 0 };
    }

    const availableMoves = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        availableMoves.push(i);
      }
    }

    const moves = [];

    for (let i = 0; i < availableMoves.length; i++) {
      const move = {};
      move.index = availableMoves[i];
      board[availableMoves[i]] = player;

      if (player === computerSymbol) {
        const result = minimax(board, humanPlayer);
        move.score = result.score;
      } else {
        const result = minimax(board, computerSymbol);
        move.score = result.score;
      }

      board[availableMoves[i]] = null;

      moves.push(move);
    }

    let bestMove;
    if (player === computerSymbol) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  };

  const isBoardFull = (board) => {
    return board.every((cell) => cell !== null);
  };

  const handleUndo = () => {
    if (stepNumber === 0) return;

    setStepNumber(stepNumber - 1);
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  const handleRestart = () => {
    startGame();
  };

  const handleBack = () => {
    setGameStarted(false);
  };

  const toggleAgainstHuman = () => {
    setIsAgainstComputer(false);
    startGame();
  };

  const toggleAgainstComputer = () => {
    setIsAgainstComputer(true);
    startGame();
  };

  useEffect(() => {
    const winner = calculateWinner(boardHistory[stepNumber]);
    if (winner) {
      setShowConfetti(true);
    } else if (stepNumber === 9) {
      setShowConfetti(false);
    }
  }, [stepNumber, boardHistory]);

  useEffect(() => {
    if (showConfetti) {
      const triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });
      confetti({
        shapes: [triangle],
      });
    }
  }, [showConfetti]);

  useEffect(() => {
    if (isAgainstComputer && !xIsNext && stepNumber !== 9) {
      const timer = setTimeout(() => {
        makeComputerMove();
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [xIsNext, isAgainstComputer]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const currentBoard = boardHistory[stepNumber];
  const winner = calculateWinner(currentBoard);

  const status = winner ? (
    <div className="font-bold">
      Winner: <span className="text-2xl">{winner}</span>
    </div>
  ) : stepNumber === 9 ? (
    <div className="font-bold">
      Result : <span className="text-2xl">Draw</span>
    </div>
  ) : (
    <div className="font-bold">
      Next player: <span className="text-2xl">{xIsNext ? "X" : "O"}</span>
    </div>
  );

  return (
    <div>
      <div className="mx-auto w-full max-w-md my-4 flex justify-center items-center lg:max-w-7xl lg:px-8">
        <div className="flex flex-col">
          <div className="bg-transparent dark:bg-transaprent p-5 lg:p-10 w-full">
            <div className="text-center ">
              Total Tic Tac Toe Game: {ticTacToeCount}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-5 text-center">
                Tic Tac Toe
              </h1>
            </div>
            <div>
              {(!gameStarted || winner || stepNumber === 9) && (
                <div className="text-center">
                  <button
                    className={
                      resolvedTheme === "dark"
                        ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                        : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                    }
                    onClick={toggleAgainstHuman}
                  >
                    Human v/s Human
                  </button>
                  <button
                    className={
                      resolvedTheme === "dark"
                        ? `white-btn rounded-lg px-2 mt-2 ml-2 hover:bg-transparent hover:text-white`
                        : `black-btn rounded-lg px-2 mt-2 ml-2 hover:bg-transparent hover:text-black`
                    }
                    onClick={toggleAgainstComputer}
                  >
                    Human v/s Computer
                  </button>
                </div>
              )}
              {gameStarted && !winner && (
                <>
                  <div>
                    <div className="p-5 text-center">
                      <div className="status my-5">{status}</div>
                    </div>
                    {!winner && stepNumber !== 9 && (
                      <div className="board grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2">
                        {currentBoard.map((cell, i) => (
                          <div
                            key={i}
                            className="bg-black-gray hover:bg-white border border-black dark:border-white shadow-lg h-12 lg:h-16 w-12 lg:w-16 flex items-center justify-center cursor-pointer text-xl font-bold text-white"
                            onClick={() => handleClick(i)}
                          >
                            {cell}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="sm:flex items-center justify-between">
                    <div className="flex my-5">
                      <button
                        onClick={handleBack}
                        className={
                          resolvedTheme === "dark"
                            ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                            : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                        }
                      >
                        Back
                      </button>
                    </div>
                    {stepNumber != 9 && (
                      <div className="flex my-5">
                        <button
                          onClick={handleUndo}
                          disabled={stepNumber === 0}
                          className={
                            resolvedTheme === "dark"
                              ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                              : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                          }
                        >
                          Undo
                        </button>
                      </div>
                    )}

                    <div className="flex my-5">
                      <button
                        onClick={handleRestart}
                        className={
                          resolvedTheme === "dark"
                            ? `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                            : `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                        }
                      >
                        Restart
                      </button>
                    </div>
                  </div>
                </>
              )}
              <div className="py-5 text-center">
                {winner && (
                  <div>
                    <div className="font-bold mb-5">
                      Winner: <span className="text-2xl">{winner}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
