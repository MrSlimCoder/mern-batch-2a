exports.getTodo = (req, res) => {
    const query = req.query;
    const todo = {
        title: query.title,
        list: query.list
    }
    return res.status(200).json(todo);
}

exports.postTodo = (req,res) => {
    const body = req.body;
    const todo = {
        title: body.title,
        list: body.list
    }
    return res.status(200).json(todo);
}


// PUT, PATCH, DELETE

// Create PUT 
// Create PATCH
// Create DELETE