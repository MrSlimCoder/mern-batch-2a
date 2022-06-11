const express = require('express');

const controller = require("../controller");

const router = express.Router();

router.get('/' ,controller.getTodo);
router.post('/',controller.postTodo);

module.exports = router;