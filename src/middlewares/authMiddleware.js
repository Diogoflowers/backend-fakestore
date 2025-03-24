import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "seu_segredo_super_seguro"; 

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(403).json({ error: "Token inválido ou expirado." });
  }
};
