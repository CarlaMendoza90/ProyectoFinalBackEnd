import * as Service from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    const products = await Service.getAllProducts();
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Service.getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            message: "Producto no encontrado."
        });
    }
};

export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const createdProduct = await Service.createProduct(newProduct);
  res.status(201).json(createdProduct);
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const updateProductData = req.body;
    const updatedProduct = await Service.updateProduct(id, updateProductData);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else{
        res.status(404).json({
            message: "Producto no encontrado."
        })
    }
}