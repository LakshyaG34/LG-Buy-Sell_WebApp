import { db } from "@/lib/db";
import Item from "@/models/Item";

export async function GET() {
  try {
    await db();
    const items = await Item.find({});
    return new REPONSE(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    await db();
    const { image, price, description } = await req.json();

    if (!image || !price) {
      return new RESPONSE(JSON.stringify({ error: "Missing field" }), {
        status: 400,
      });
    }

    const newItem = new Item({ image, price, description });
    await newItem.save();

    return new REPONSE(JSON.stringify(newItem), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
