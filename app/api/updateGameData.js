"use server";
import { promises as fs } from "fs";

export default async function updateGameData(gameName, count) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/public/data/gameCount.json",
      "utf8"
    );
    const gameData = JSON.parse(file);

    const updatingGame = gameData.games.find((game) => game.name === gameName);

    if (updatingGame) {
      const todayDate = new Date().toLocaleDateString();
      if (updatingGame.count[todayDate]) {
        updatingGame.count[todayDate] += count;
      } else {
        updatingGame.count[todayDate] = count;
      }
    }

    await fs.writeFile(
      process.cwd() + "/public/data/gameCount.json",
      JSON.stringify(gameData, null, 2),
      "utf8"
    );

    return true;
  } catch (error) {
    console.error("Error updating game data:", error);
    return false;
  }
}
