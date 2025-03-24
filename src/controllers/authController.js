import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: "Usuário já existe!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar usuário." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Senha incorreta!" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login realizado com sucesso!", token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login." });
  }
};

export const home = async (req, res) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Token não fornecido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    res.status(200).json({
      message: "Bem-vindo à página inicial!",
      user: user,
    });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Token inválido" });
    }

    console.error("Erro na rota /home:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const insertProduct = async (req, res) => {
  const { title, price, description, image, rating } = req.body;

  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Token não fornecido" });
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const existingProduct = await prisma.product.findFirst({
      where: {
        userId: user.id,
        title: title,
      },
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Já existe um produto com este título." });
    }

    const truncatedDescription = description.substring(0, 255);

    const product = await prisma.product.create({
      data: {
        title,
        price,
        description: truncatedDescription,
        image,
        rate: rating,
        userId: user.id,
      },
    });

    res.status(201).json({ message: "Produto criado com sucesso!", product });
  } catch (error) {
    console.error("Erro na rota /insertProduct:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};


export const getProduct = async (req, res) => {
    try {

      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
  
      const products = await prisma.product.findMany({
        where: {
          userId: user.id,
        },
      });
  
      res.status(200).json({ products });
    } catch (error) {
      console.error("Erro na rota /getProduct:", error);
  
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Token inválido" });
      }
  
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };
