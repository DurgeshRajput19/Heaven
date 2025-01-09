import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
      required: true,
    },
    data: {
      type: Number,
      required: false,
    },
    sizes: {
      type: Array,
      required: true,
    },
    popular: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("productModel", productSchema);
export default productModel;
