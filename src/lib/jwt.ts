import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "your-secret-key"; // Clave secreta almacenada en variables de entorno

export const signToken = (data: object) => {
  const token = jwt.sign(
    data,
    secretKey,
    { expiresIn: "1h" } // El token expira en 1 hora
  );
  return token;
};
export const verifyToken =async (token) => {
  try {
    console.log(token)
    const decoded = await jwt.verify(token, secretKey);
    return decoded; 
  } catch (error) {
    console.log(error)
    throw new Error("Token inválido o expirado"); 
    
  }
};
