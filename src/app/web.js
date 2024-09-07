import express from "express"
import 'dotenv/config'
import { publicRouter } from "../routes/public-api.js";
import { errorMiddleware } from "./middlewares/error-middlewares.js";


const web = express()

web.use(express.json())
web.use(errorMiddleware)
web.use(publicRouter)

export { web }