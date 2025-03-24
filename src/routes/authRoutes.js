import express from "express";
import { register, login, home, insertProduct, getProduct } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/home", authMiddleware, home);
router.post("/insertProduct", authMiddleware, insertProduct);
router.get("/getProduct", authMiddleware, getProduct);

export default router;
