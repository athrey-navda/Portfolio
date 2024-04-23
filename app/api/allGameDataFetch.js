"use server";
import fs from "fs";
import path from "path";

const gameCountFilePath = "./public/data/gameCount.json";
console.log("gameCountFilePath:", gameCountFilePath);

export default async function allGameDataFetch() {
  try {
    const data = await fs.promises.readFile(gameCountFilePath, "utf8");
    const parsedData = JSON.parse(data);

    return parsedData;
  } catch (error) {
    console.error("Error reading game count file:", error);
  }
}
