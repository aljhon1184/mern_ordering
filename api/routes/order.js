import express from "express"
import { createOrder } from "../controllers/order.js";

const route = express.Router();

//CREATE
route.post("/", createOrder);

//GET

//UPDATE

//DELETE

export default route;