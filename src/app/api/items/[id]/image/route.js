import { db } from "@/lib/db";
import Item from "@/models/Item";

export async function GET(req, { params }) {
  try {
    await db();
    const { id } = params;

    const item = await Item.findById(id);
    if (!item || !item.image?.data) {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(item.image.data, {
      status: 200,
      headers: {
        "Content-Type": item.image.contentType,
        "Content-Length": item.image.data.length,
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
