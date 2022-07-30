const jwt = require("jsonwebtoken");
const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    const body = req.body;
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user._id
            }, 'secret', (err, token) => {
                if (err) { }
                else {
                    return res.status(200).json({
                        success: true,
                        data: [{ user: user }, { token: "Bearer " + token }],
                        message: "User logged in successfully"
                    })
                }
            });
        }
        else {
            return res.status(400).json({
                message: "Password is incorrect",
                success: false
            })
        }
    }
    else {
        return res.status(404).json({
            message: "User not found",
            success: false
        })
    }
}

exports.signup = async (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    if (salt) {
        const hash = await bcrypt.hash(body.password, salt);
        body.password = hash;
        const user = new User(body);
        const data = await user.save();
        return res.status(200).json({
            message: "User Added",
            data
        })
    }
}