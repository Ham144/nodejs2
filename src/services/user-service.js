import { prisma } from "../app/database.js"
import { ResponseError } from "../errors/response-error.js"
import { registerUserValidation } from "../validations/user-validation.js"
import { validate } from "../validations/validate.js"
import bcrypt from "bcrypt"

const register = async (req) => {
    const user = await validate(registerUserValidation, req)

    const existingUser = await prisma.user.count({
        where: {
            username: user.username
        }
    })
    if (existingUser == 1) {
        throw new ResponseError(400, "user already exist");
    }

    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(req.password, salt)

    return prisma.user.create({
        data: user,
        select: {
            username: true,
            name: true,
        }
    })

}

export default {
    register
}