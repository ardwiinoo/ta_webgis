const db = require("../models");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.userLogin = async (req, res) => {
    const {username, password } = req.body;

    try {
        const user = await User.findOne(
            {
                where: {
                    username
                }
            }
        );

        if(!user) {
            return res.status(401).json(
                {
                    "error": "true",
                    "message": "Invalid credentials",
                    "data": null
                }
            )
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json(
                {
                    "error": "true",
                    "message": "Invalid credentials",
                    "data": null
                }
            )
        }

        const token = jwt.sign(
            {
                userId: user.id
            },
            process.env.JWT_SECRET, 
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json(
            {
                "error": "false",
                "message": "Sign in successfully",
                "data": [
                    {
                        "id": user.id,
                        "fullname": user.fullname,
                        "token": token
                    }
                ]
            }
        )
    } catch(error) {
        console.error(`Login: ${error}`)
        res.status(500).json({
            "error": "true",
            "message": "Internal Server Error",
            "data": null
        })
    }
}

exports.userRegister = async (req, res) => {
    const { fullname, username, password } = req.body;

    try {
        const existingUser = await User.findOne(
            {
                where: {
                    username
                }
            }
        )

        if(existingUser) {
            return res.status(409).json(
                {
                    "error": "true",
                    "message": "Username already taken",
                    "data": null
                }
            );
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create(
            {
                fullname,
                username,
                password: hashedPassword
            }
        );
        
        res.status(201).json(
            {
                "error": "false",
                "message": "User created succesfully",
                "data": [
                    {
                        "id": user.id,
                        "username": user.username
                    }
                ]
            }
        )

    } catch(error) {
        console.error(`Register: ${error}`)
        res.status(500).json(
            {
                "error": "true",
                "message": "Internal server error",
                "data": null
            }
        )
    }
}