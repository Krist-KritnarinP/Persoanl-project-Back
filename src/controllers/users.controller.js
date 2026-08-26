import bcrypt from 'bcrypt'
import createError from "http-errors"
import { editUser } from "../services/user.service.js"


// Get me  คือ  การ getข้อมูล ของเรา มาดูfetchข้อมูลuser มาดู
export function getMe (req,res){
    const {id,username,email} = req.user
    res.status(200).json({ id,username,email})

}

export async function editMe(req, res, next) {
    const { email } = req.user
    const { username, password } = req.body
    if (!email || !username || !password) {
        return next(createError(400, "email username and password are requires"))
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await editUser(email, username, hashPassword)
    res.status(200).json({ message: "Profile updated" })
}
