import express from "express"
import { configDotenv } from "dotenv";
import { publicRouter } from "../routes/public-api.js";
import { errorMiddleware } from "./middlewares/error-middlewares.js";


const dotenv = configDotenv()
const web = express()

web.use(dotenv)
web.use(express.json())
web.use(errorMiddleware)
web.use(publicRouter)

export { web }