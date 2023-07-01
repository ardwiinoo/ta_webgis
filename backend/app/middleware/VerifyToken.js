const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json(
            {
                "error": "true",
                "message": "No token provided",
                "data": null
            }
        )
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userData = decoded;

        next();
    } catch (error) {
        console.error(`VerifyToken: ${error}`);
        return res.status(401).json(
            {
                "error": "true",
                "message": "Invalid token",
                "data": null
            }
        )
    }
}

module.exports = verifyToken;