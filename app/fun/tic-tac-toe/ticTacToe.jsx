"use client";
import { useState, useEffect } from "react";
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

  const startGame = () => {
    setGameStarted(true);
    setBoardHistory([initialBoard]);
    setStepNumber(0);
    setXIsNext(true);
    setShowConfetti(false);
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

  const handleUndo = () => {
    if (stepNumber === 0) return;

    setStepNumber(stepNumber - 1);
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  const handleRestart = () => {
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
    <div className="font-bold">Draw</div>
  ) : (
    <div className="font-bold">
      Next player: <span className="text-2xl">{xIsNext ? "X" : "O"}</span>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-md my-20 sm:my-4 flex min-h-screen justify-center items-center lg:max-w-7xl lg:px-8">
      <div className="flex flex-col">
        <div className="bg-stone-300 dark:bg-stone-700 p-5 lg:p-10 w-full">
          <div>
            <h1 className="text-3xl font-bold mb-5 text-center">Tic Tac Toe</h1>
          </div>
          <div>
            {!gameStarted && (
              <div className="text-center">
                <button
                  className={
                    resolvedTheme === "dark"
                      ? `white-btn rounded-lg px-2 hover:bg-transparent hover:text-white`
                      : `black-btn rounded-lg px-2 hover:bg-transparent hover:text-black`
                  }
                  onClick={startGame}
                >
                  Start Game
                </button>
              </div>
            )}
            {gameStarted && !winner && (
              <>
                <div>
                  <div className="">
                    <div className="status my-5">{status}</div>
                  </div>
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
                </div>
                <div className="py-5 text-center">
                  <button
                    onClick={handleUndo}
                    disabled={stepNumber === 0}
                    className={
                      resolvedTheme === "dark"
                        ? `white-btn rounded-lg px-2 hover:bg-transparent hover:text-white`
                        : `black-btn rounded-lg px-2 hover:bg-transparent hover:text-black`
                    }
                  >
                    Undo
                  </button>
                </div>
              </>
            )}
            {(winner || stepNumber === 9) && (
              <div className="py-5 text-center">
                {winner && (
                  <div className="font-bold mb-5">
                    Winner: <span className="text-2xl">{winner}</span>
                  </div>
                )}
                {stepNumber === 9 && <div className="font-bold mb-5">Draw</div>}
                <button
                  onClick={handleRestart}
                  className={
                    resolvedTheme === "dark"
                      ? `white-btn rounded-lg px-2 hover:bg-transparent hover:text-white`
                      : `black-btn rounded-lg px-2 hover:bg-transparent hover:text-black`
                  }
                >
                  Restart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
