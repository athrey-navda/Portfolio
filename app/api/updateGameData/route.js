"use server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const { gameName } = await req.json();

    console.log(`Updating game data for ${gameName}`);

    const { data: gameData, error: fetchError } = await supabase
      .from("game_counts")
      .select("count")
      .eq("name", gameName)
      .single();

    if (fetchError || !gameData) {
      console.log(`Game ${gameName} not found.`);
      return new Response(JSON.stringify({ message: "Game not found" }), {
        status: 404,
      });
    }

    const todayDate = new Date().toLocaleDateString();
    const currentCount = gameData.count || {};

    currentCount[todayDate] = (currentCount[todayDate] || 0) + 1;

    const { error: updateError } = await supabase
      .from("game_counts")
      .update({ count: currentCount })
      .eq("name", gameName);

    if (updateError) {
      throw new Error(updateError.message);
    }

    console.log(`Game data updated successfully.`);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error updating game data:", error.message);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
