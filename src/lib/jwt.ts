import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
const secretKey = process.env.JWT_SECRET || "your-secret-key"; // Clave secreta almacenada en variables de entorno
const key = new TextEncoder().encode(secretKey);
export const signToken = (data: object) => {
  const token = jwt.sign(
    data,
    secretKey,
    { expiresIn: "1h" } // El token expira en 1 hora
  );
  return token;
};
export const verifyToken = async (token: string) => {
  try {
    console.log(token);
    const decoded = await jwtVerify(token, key);
    console.log(`Decode: ${decoded}`);
    return decoded;
  } catch (error) {
    console.log(error);
    throw new Error("Token inválido o expirado");
  }
};
