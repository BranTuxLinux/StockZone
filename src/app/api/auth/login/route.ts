import { sendRes } from "@/hooks/useRes";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";
export async function POST(request: Request) {
  try {
    const cookie = cookies()
    const data = await request.json();

    
      console.log("Entro")
      const token = signToken({data})
      console.log(token)
      const ck = cookie.set('token', token)
      return Response.json(ck)

    
    return Response.json(sendRes({ msg: "todo bien" , data}));
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
