import { db } from "@/lib/db";
import Item from "@/models/Item";

export async function GET() {
  try {
    await db();
    const items = await Item.find({});
    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    await db();
    const { image, price, description, category } = await req.json();

    if (!image || !price || !description || !category) {
      return new Response(JSON.stringify({ error: "Missing field" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
      
    }

    const newItem = new Item({
      image,
      price: Number(price),
      description,
      category
    });
    console.log(newItem);
    
    await newItem.save();

    return new Response(JSON.stringify(newItem), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
