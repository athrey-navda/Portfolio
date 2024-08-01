"use server";
import { promises as fs } from "fs";
import path from "path";

const gameCountFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "gameCount.json"
);

export async function GET() {
  try {
    const data = await fs.readFile(gameCountFilePath, "utf8");
    const parsedData = JSON.parse(data);
    return new Response(JSON.stringify(parsedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error reading game count file:", error);
    return new Response(
      JSON.stringify({ message: "Error reading game count file" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
