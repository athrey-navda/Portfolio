"use server";
import { promises as fs } from "fs";
import path from "path";

const gameCountFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "gameCount.json"
);

export default async function allGameDataFetch() {
  try {
    const data = await fs.readFile(gameCountFilePath, "utf8");
    const parsedData = JSON.parse(data);

    return parsedData;
  } catch (error) {
    console.error("Error reading game count file:", error);
  }
}
