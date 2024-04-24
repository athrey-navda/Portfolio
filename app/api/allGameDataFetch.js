"use server";
import fs from "fs";
import path from "path";

export default async function allGameDataFetch() {
  try {
    const gameCountFilePath = path.join(
      process.cwd(),
      "public",
      "data",
      "gameCount.json"
    );
    const file = fs.readFileSync(gameCountFilePath, "utf8");
    const parsedData = JSON.parse(file);

    return parsedData;
  } catch (error) {
    console.error("Error reading game count file:", error);

    throw error;
  }
}
