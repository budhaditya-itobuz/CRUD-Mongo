import express from "express"
import { addUsers, getUser, updateUser, deleteUser } from "../controllers/controller.js"

const router = express.Router()


router.get("/getUsers/:id", getUser)

router.post("/addUsers", addUsers)

router.put('/updateUsers/:id', updateUser)

router.delete('/deleteUser/:id', deleteUser)

export default router