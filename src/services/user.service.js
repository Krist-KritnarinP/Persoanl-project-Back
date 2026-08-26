import { prisma } from "../lib/prisma.js";

export const findUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email: email }
    })
    return user
}
export const findUserById = async (id) => {
    console.log('id', id)
    // ตั้งตามตัวแปรSchema 
    const user = await prisma.user.findFirst({
        where: { id: id }
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
    const result = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            username,
            password: hashPassword
        }
    })
    return result
}