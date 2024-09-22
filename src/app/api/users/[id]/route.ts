import User from "@/backend/models/User";
import { sendRes } from "@/hooks/useRes";
import { idTypes } from "../../api";
export async function DELETE(req: Request, { params }: idTypes) {
  try {
    // const userData = await req.json();
    const user = await User.findOneAndDelete({ _id: params.id });

    if (!user) Response.json(sendRes({ msg: "Usuario no encontrado", status:404 }));

    return Response.json(sendRes({ msg: "DELETED", data: user , status:200}));
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
