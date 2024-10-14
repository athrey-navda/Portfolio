"use client";
import React, { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PieController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  ArcElement,
} from "chart.js";
import { useTheme } from "next-themes";

ChartJS.register(
  LineElement,
  BarElement,
  PieController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  ArcElement
);

const GameChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [chartType, setChartType] = useState("bar");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    fetch("/api/gameData/")
      .then((response) => response.json())
      .then((data) => {
        const dates = Array.from(
          new Set([
            ...Object.keys(data[0]?.count || {}),
            ...Object.keys(data[1]?.count || {}),
          ])
        ).sort();

        const ticTacToeData = dates.map((date) => data[0]?.count[date] || 0);
        const snakeAndLadderData = dates.map(
          (date) => data[1]?.count[date] || 0
        );
        console.log(data);
        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Tic-Tac-Toe",
              data: ticTacToeData,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.7)",
              fill: true,
            },
            {
              label: "Snake and Ladder",
              data: snakeAndLadderData,
              borderColor: "rgba(153,102,255,1)",
              backgroundColor: "rgba(153,102,255,0.7)",
              fill: true,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  }, []);

  const pieChartData = {
    labels: ["Tic-Tac-Toe", "Snake and Ladder"],
    datasets: [
      {
        label: "Total Counts",
        data: [
          chartData?.datasets[0]?.data.reduce((a, b) => a + b, 0) || 0,
          chartData?.datasets[1]?.data.reduce((a, b) => a + b, 0) || 0,
        ],
        backgroundColor: ["rgba(75,192,192,0.7)", "rgba(153,102,255,0.7)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(153,102,255,1)"],
        borderWidth: 1,
      },
    ],
  };

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
      <div className="flex flex-col items-center mb-4 space-y-4">
        <button
          onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}
          className={
            resolvedTheme === "dark"
              ? `white-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-white`
              : `black-btn rounded-lg px-4 py-2 hover:bg-transparent hover:text-black`
          }
        >
          Toggle to {chartType === "bar" ? "Pie" : "Bar"} Chart
        </button>

        <div className="text-xl font-semibold">Games Count Over Time</div>
      </div>

      <div className="w-full max-w-4xl px-4 flex justify-center">
        {chartType === "bar" ? (
          <Bar data={chartData} options={options} />
        ) : (
          <Pie data={pieChartData} />
        )}
      </div>
    </div>
  );
};

export default GameChart;
