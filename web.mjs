import { PrismaClient } from "@prisma/client";
import express, { urlencoded } from "express";

const prisma = PrismaClient()

const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }));




app.get("/", (req, res) => {
    return res.send("hello world")
});

app.listen(2000, () => console.log("running"));

module.exports = app