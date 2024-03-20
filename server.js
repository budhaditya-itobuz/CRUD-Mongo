import express, { Router } from "express"
import dotenv from "dotenv"
import router from "./src/routes/routes.js"
import mongoose from "mongoose"

dotenv.config()
const port = process.env.PORT
const mongooseUrl = process.env.MONGOOSE_URL

const app = express()
app.use(express.json())


const connect = async () => {
    await mongoose.connect(mongooseUrl);
}


connect().catch(err => console.log(err));

app.use("/", router)

app.listen(port, () => {
    console.log(`app is running on port no ${port}`)
})




