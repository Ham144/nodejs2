import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().required().min(3).max(100),
    password: Joi.string().required().min(3).max(100),
    name: Joi.string().required().min(3).max(100),
})

export {
    registerUserValidation
}