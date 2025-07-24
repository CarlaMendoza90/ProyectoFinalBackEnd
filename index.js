import "dotenv/config";
import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Bienvenidos a la API Rest"});
});

const PORT = process.env.PORT || 3001;

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));