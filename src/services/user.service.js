import { prisma } from "../lib/prisma.js";

export const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email: email }
    })
    return user
}
export const findUserById = async (id) => {
    const numericId = Number(id)
    if (!numericId || Number.isNaN(numericId)) return null
    // ตั้งตามตัวแปรSchema 
    const user = await prisma.user.findUnique({
        where: { id: numericId }
    })
    return user
}

export const createUser = async (username,email,hashPassword) => {
    const newUser = await prisma.user.create(
        {
    data: {
      username,
      email,
      password: hashPassword
    }
  }
)
return newUser
}

export const editUser = async (email, username, hashPassword) => {
    const data = {}
    if (username !== undefined) data.username = username
    if (hashPassword !== undefined) data.password = hashPassword
    const result = await prisma.user.update({
        where: {
            email: email
        },
        data
    })
    return result
}