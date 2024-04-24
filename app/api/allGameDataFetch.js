"use server";
import { promises as fs } from "fs";

export default async function Page() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/public/data/gameCount.json",
      "utf8"
    );
    const data = JSON.parse(file);

    return data;
  } catch {
    console.error("Error reading game count file:", error);

    throw error;
  }
}
