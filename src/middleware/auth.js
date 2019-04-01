const jwt = require('jsonwebtoken')
const User = require('../models/user')

const jwtSecret = process.env.JWT_SECRET

const auth = async (req, res, next) => {
    try {
        const cookie = req.cookies.token
        const token = cookie.split(';')[0].replace('token=', '')
        const decoded = jwt.verify(token, jwtSecret)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'Authenticate failed!'})
    }
}

module.exports = auth