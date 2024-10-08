"use server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data: games, error } = await supabase
      .from("game_counts")
      .select("*");
    if (error) {
      throw new Error(error.message);
    }

    console.log(games);

    return new Response(JSON.stringify(games), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Expires: "0",
        Pragma: "no-cache",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error fetching game count data here:", error.message);
    return new Response(
      JSON.stringify({ message: "Error fetching game count data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Expires: "0",
          Pragma: "no-cache",
          "Surrogate-Control": "no-store",
        },
      }
    );
  }
}
