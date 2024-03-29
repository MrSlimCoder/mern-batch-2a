const Todo = require("../model/Todo");

exports.getTodo = async (req, res) => {
    const data = await Todo.find({
        delete: false
    });
    if (data) {
        return res.status(200).json({
            message: "My Todo",
            data
        })
    }
    else {
        return res.status(500).json({
            message: "Todo Not Found"
        })
    }
}

exports.postTodo = async (req, res) => {
    const body = req.body;
    const todo = new Todo(body);
    const data = await todo.save();
    return res.status(200).json({
        message: "Todo Added",
        data
    })
}

/* TASK */
exports.putTodo = async (req, res) => {
}

exports.patchTodo = async (req, res) => {
    const body = req.body;
    const updateTodo = await Todo.findOneAndUpdate(body, { title: "xyz" }, { new: true });
    if (updateTodo) {
        return res.status(200).json({
            message: "My Todo",
            data: updateTodo
        })
    }
    else {
        return res.status(500).json({
            message: "Todo Not Found"
        })
    }
}

exports.deleteTodo = async (req, res) => {
    const query = req.query;
    const updateTodo = await Todo.findOneAndUpdate(query, { delete: true }, { new: true });
    if (updateTodo) {
        return res.status(200).json({
            message: "My Todo",
            data: updateTodo
        })
    }
    else {
        return res.status(500).json({
            message: "Todo Not Found"
        })
    }
}