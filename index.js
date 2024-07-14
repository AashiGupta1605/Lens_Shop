import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import UserRoutes from "./routes/User/UserRoutes.js";
import AdminRoutes from "./routes/Admin/AdminRoutes.js";
import ConnectDB from './config/ConnectDB.js'

const app=express();
app.use(cors());
app.use(express.json());

dotenv.config()
ConnectDB()

const port = process.env.port || 5000

app.use("/api/v1/admin/",AdminRoutes)
app.use("/api/v1/user/",UserRoutes)

app.listen(port,()=>console.log("Connected"));
