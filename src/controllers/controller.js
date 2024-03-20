import User from "../models/data.js"
import { StatusCodes } from "http-status-codes"


export const addUsers = async (req, res) => {
    try {
        const userData = req.body
        const user = new User(userData)
        user.save()
        res.status(StatusCodes.OK).json({ message: "User added Successfully" })
    }
    catch (e) {
        console.log(e)
        res.status(StatusCodes.CONFLICT).json({ message: "An error has occured" })
    }
}

export const getUser = async (req, res) => {
    try {
        console.log()
        if (!!req.params.id) {
            const data = await User.findById(req.params.id)
            res.status(StatusCodes.OK).json(data)
        }
        else {
            console.log("bjh")
            const data = await User.find()
            res.status(StatusCodes.OK).json(data)
        }
    }
    catch (e) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Not found" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const id=req.params.id
        console.log(id);
        await User.findByIdAndUpdate(id ,req.body)
        res.status(StatusCodes.OK).json({message:"successfully updated"})
    }
    catch (e) {
        console.log(e)
        res.status(StatusCodes.NOT_FOUND).json({ message: "Failed to update" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id=req.params.id
        console.log(id);
        await User.findByIdAndDelete(id)
        res.status(StatusCodes.OK).json({message:"successfully deleted"})
    }
    catch (e) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Failed to delete" })
    }
}

