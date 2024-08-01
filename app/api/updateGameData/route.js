"use server";
import { promises as fs } from "fs";
import path from "path";

const gameCountFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "gameCount.json"
);

export async function POST(request) {
  try {
    const { gameName, count } = await request.json();
    console.log(`Updating game data for ${gameName} with count ${count}`);

    const file = await fs.readFile(gameCountFilePath, "utf8");
    const gameData = JSON.parse(file);

    const updatingGame = gameData.games.find((game) => game.name === gameName);

    if (updatingGame) {
      const todayDate = new Date().toLocaleDateString();
      if (updatingGame.count[todayDate]) {
        updatingGame.count[todayDate] += count;
      } else {
        updatingGame.count[todayDate] = count;
      }

      await fs.writeFile(
        gameCountFilePath,
        JSON.stringify(gameData, null, 2),
        "utf8"
      );

      console.log(`Game data updated successfully.`);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      console.log(`Game ${gameName} not found.`);
      return new Response(JSON.stringify({ message: "Game not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error updating game data:", error.message);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
