import connectToDatabase from "@/backend/libs/db";
import User from "@/backend/models/User";
import { sendRes  } from "@/hooks/useRes";
connectToDatabase()
export async function GET() {
  const user = await User.find();
  
  try {
    return Response.json(sendRes("Users GET", user));
  } catch (error) {
    return Response.json(sendRes('error in Users', {error}));
  }
}
export async function POST(req: Request) {
  const userData = await req.json();
  console.log(userData);
  try {
    const user = new User(userData);
    await user.save();
    return Response.json({ user });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
