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

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req) {
  try {
    await db();

    const formData = await req.formData();

    const price = formData.get("price");
    const description = formData.get("description");
    const category = formData.get("category");
    const file = formData.get("image"); // File object

    if (!price || !description || !category || !file) {
      return new Response(JSON.stringify({ error: "Missing field" }), {
        status: 400,
      });
    }

    // Convert File → Buffer
    const buffer = await streamToBuffer(file.stream());

    const newItem = new Item({
      image: {
        data: buffer,
        contentType: file.type,
      },
      price,
      description,
      category,
    });

    await newItem.save();

    return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

// handler.post(async (req, res) =>{
//   await db();
//   const {price, description, category} = req.body;
//   if (!price || !description || !category) {
//     return res.status(400).json({ error: "Missing field" });
//   }

//   const newItem = new Item({
//     image: {
//       data: req.file.buffer,
//       contentType: req.file.mimetype,
//     },
//     price,
//     description,
//     category,
//   });

//   await newItem.save();
//   return res.status(201).json(newItem);
// })

// export const config = {
//   api: {
//     bodyParser: false, // multer handles parsing
//   },
// };

// export default handler;

// handler.post(async (req, res){
//   try {
//     await db();
//     const { price, description, category } = await req.json();

//     if (!price || !description || !category) {
//       return new Response(JSON.stringify({ error: "Missing field" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       }); 
//     }

//     let image = undefined;
//     if(req.file)
//     {
//       profilePic = {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//       }
//     }

//     const newItem = new Item({
//       image,
//       price: Number(price),
//       description,
//       category
//     });
//     console.log(newItem);
    
//     await newItem.save();

//     return new Response(JSON.stringify(newItem), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     return new Response(JSON.stringify({ error: "Internal server error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
