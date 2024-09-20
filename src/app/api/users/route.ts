import connectToDatabase from "@/backend/libs/db";
import User from "@/backend/models/User";

connectToDatabase();
export async function GET() {
  const user = await User.find();
  try {
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        msg: "Hello",
        error,
      },
      { status: 400 }
    );
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
