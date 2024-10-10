import User, { IUser } from "@/backend/models/User";
import { sendRes } from "@/hooks/useRes";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  // Agrega otros campos aquí si es necesario
});

export async function POST(request: Request) {
  try {
    const cookie = cookies();
    const data = await request.json();

    // Valida la entrada del usuario
    const parsedData = userSchema.parse(data);

    // Crea un nuevo usuario utilizando el correo electrónico proporcionado
    const user: IUser | null = await User.findOne({ email: parsedData.email });

    if (!user) {
      return Response.json(sendRes({ msg: "Usuario inexistente" }));
    } else {
      console.log("Usuario existente:", user);
    }

    const token = signToken({ email: parsedData.email });
    cookie.set("token", token);

    return Response.json({ success: true, token });
  } catch (error) {
    // Maneja errores de validación
    if (error instanceof z.ZodError) {
      return Response.json({ errors: error.errors }, { status: 400 });
    }
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
