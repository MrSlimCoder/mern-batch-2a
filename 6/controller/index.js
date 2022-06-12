const Test = require("../model/test");

exports.postTest = async (req,res) => {
    const body = req.body;
    const test = new Test(body);
    const data = await test.save();
    return res.status(200).json({
        message: "Data is saved",
        data
    })
}
