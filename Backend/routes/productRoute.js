import express from "express";
import {
  singleProduct,
  addProduct,
  listProduct,
  removeProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add",adminAuth , upload.single("image"), addProduct);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.get("/list", listProduct);
productRouter.post("/single", listProduct);

export default productRouter;
