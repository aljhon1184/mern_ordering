import express from "express"
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.js";

const route = express.Router();

//create
route.post("/", createProduct);

//update
route.put("/:id", updateProduct);

//delete
route.delete("/:id", deleteProduct);


//get
route.get("/:id", getProduct);


//getall
route.get("/", getAllProduct);


export default route;