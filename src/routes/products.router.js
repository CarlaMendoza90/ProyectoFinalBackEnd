import { Router } from "express";
const router = Router();

import { getAllProducts, getProductById, createProduct } from "../controllers/products.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

router.get('/products', getAllProducts);
router.get('/products/:id', auth, getProductById);

router.post("/products", auth, createProduct);

export default router;