const jwt = require("jsonwebtoken");
const User = require("../model/User");

exports.login = async (req, res) => {
    const body = req.body;
    const { email, password } = body;
    const user = await User.findOne({ email, password });
    if (user) {
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
        return res.status(404).json({
            message: "User not found",
            success: false
        })
    }
}

exports.signup = async (req, res) => {
    const body = req.body;
    const user = new User(body);
    const data = await user.save();
    return res.status(200).json({
        message: "User Added",
        data
    })
}