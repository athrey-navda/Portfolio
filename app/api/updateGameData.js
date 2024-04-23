"use server";
import { promises as fs } from "fs";
import path from "path";

const gameCountFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "gameCount.json"
);

export default async function updateGameData(gameName, count) {
  try {
    const jsonData = await fs.promises.readFile(gameCountFilePath, "utf8");
    const gameData = JSON.parse(jsonData);

    const updatingGame = gameData.games.find((game) => game.name === gameName);

    if (updatingGame) {
      const todayDate = new Date().toLocaleDateString();
      if (updatingGame.count[todayDate]) {
        updatingGame.count[todayDate] += count;
      } else {
        updatingGame.count[todayDate] = count;
      }
    }

    await fs.promises.writeFile(
      gameCountFilePath,
      JSON.stringify(gameData, null, 2),
      "utf8"
    );

    return true;
  } catch (error) {
    console.error("Error updating game data:", error);
    return false;
  }
}
