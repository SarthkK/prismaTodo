import express from "express";
import dotenv from "dotenv";
import apiRouter from "./router/main";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use("/api", apiRouter)

app.listen(process.env.PORT, ()=>{
    console.log("listening on port " + process.env.PORT)
})

export { prisma };