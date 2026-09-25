import bcrypt from 'bcrypt'
import createError from "http-errors"
import { editUser } from "../services/user.service.js"


// Get me  คือ  การ getข้อมูล ของเรา มาดูfetchข้อมูลuser มาดู
export function getMe (req,res){
    const {id,username,email} = req.user
    res.status(200).json({ id,username,email})

}

export async function editMe(req, res, next) {
    try {
        const { email } = req.user
        const { username, password } = req.body ?? {}
        if (username === undefined && password === undefined) {
            return next(createError(400, "username or password is required"))
        }
        if (username !== undefined && (typeof username !== "string" || username.trim().length < 4)) {
            return next(createError(400, "username minimum 4 letters"))
        }
        if (password !== undefined && (typeof password !== "string" || password.length < 4)) {
            return next(createError(400, "password minimum 4 letters"))
        }
        const hashPassword = password ? await bcrypt.hash(password, 10) : undefined
        const updated = await editUser(email, username?.trim(), hashPassword)
        res.status(200).json({
            message: "Profile updated",
            user: { id: updated.id, username: updated.username, email: updated.email },
        })
    } catch (err) {
        next(err)
    }
}
