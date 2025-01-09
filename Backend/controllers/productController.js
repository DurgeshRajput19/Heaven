import { v2 as Cloudinary } from "cloudinary";
import productModel from "../models/product.model.js";

const addProduct = async (req, res) => {
  try {
    console.log("Request Body", req.body);
    console.log("Uploaded File", req.file);

    const { name, description, category, prices, popular } = req.body;

    const image = req.file;

    const imageURL = await Cloudinary.uploader
      .upload(image.path, { resource_type: "image" })
      .then((res) => res.secure_url);

    const parsedPrices = JSON.parse(prices);

    const price = parsedPrices.reduce((acc, curr) => {
      acc[curr.size] = Number(curr.price);
      return acc;
    }, {});

    const sizes = parsedPrices.map((item) => item.size);

    const productData = {
      name,
      description,
      category,
      price,
      sizes,
      popular: popular === "true",
      image: imageURL,
      date: Date.now(),
    };
    console.log("Product data", productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Food Added", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findOneAndDelete(req.body.id);
    res.json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

export { addProduct, removeProduct, listProduct, singleProduct };
