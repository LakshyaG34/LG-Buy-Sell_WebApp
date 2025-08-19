import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function GET(){
    try{
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        if(!token)
        {
            return new Response(JSON.stringify({isLoggedIn:false}), {status:200});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return new Response(JSON.stringify({isLoggedIn:true, user:decoded}), {status:200});
    }
    catch (error) {
    return new Response(JSON.stringify({ isLoggedIn: false }), { status: 200 });
  }
}