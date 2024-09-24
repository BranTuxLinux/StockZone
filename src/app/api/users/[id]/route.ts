import User from "@/backend/models/User";
import { sendRes } from "@/hooks/useRes";
import { idTypes } from "../../api";
export async function GET(req: Request, { params }: idTypes) {
  try {
    // const userData = await req.json();
    const user = await User.findOne({ _id: params.id });

    if (!user) Response.json(sendRes({ msg: "Usuario no encontrado" }));

    return Response.json(
      sendRes({
        msg: "USER FINED",
        data: user,
      })
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: idTypes) {
  try {
    // const userData = await req.json();
    const user = await User.findOneAndDelete({ _id: params.id });

    if (!user) Response.json(sendRes({ msg: "Usuario no encontrado" }));

    return Response.json(sendRes({ msg: "USER DELETED", data: user }));
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
