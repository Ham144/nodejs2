import userService from "../services/user-service.js"

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body)
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error)
    }
}

export default {
    register
}

