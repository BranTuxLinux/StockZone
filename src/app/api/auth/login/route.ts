import { sendRes } from "@/hooks/useRes";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
export async function POST(request: Request) {
  try {
    const cookie = cookies()
    const data = await request.json();

    if ( data.email === 'vetulio@gmai.com'){
      const token = await jwt.sign({
        email: data.email,
        exp: '1d'
      }, 'SECRET')
      console.log(token)
      const ck = cookie.set('token', token)
      return Response.json(ck)

    }
    return Response.json(sendRes({ msg: "todo bien" , data}));
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
