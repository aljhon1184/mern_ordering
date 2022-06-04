import express from "express"
import { login, register } from "../controllers/auth.js";

const route = express.Router();


//register
route.post("/register", register);

//login
route.get("/login", login)


export default route;