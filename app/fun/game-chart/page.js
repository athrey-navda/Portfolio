"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const GameChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch("/data/gameCount.json")
      .then((response) => response.json())
      .then((data) => {
        const dates = Array.from(
          new Set([
            ...Object.keys(data.games[0].count),
            ...Object.keys(data.games[1].count),
          ])
        ).sort();

        const ticTacToeData = dates.map(
          (date) => data.games[0].count[date] || 0
        );
        const snakeAndLadderData = dates.map(
          (date) => data.games[1].count[date] || 0
        );

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Tic-Tac-Toe",
              data: ticTacToeData,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: true,
            },
            {
              label: "Snake and Ladder",
              data: snakeAndLadderData,
              borderColor: "rgba(153,102,255,1)",
              backgroundColor: "rgba(153,102,255,0.2)",
              fill: true,
            },
          ],
        });
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 bg-white dark:bg-black text-black dark:text-white">
      <div className="text-xl font-semibold mb-4">Games Count Over Time</div>
      <div className="w-full max-w-4xl px-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GameChart;
