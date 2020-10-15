const express = require("express");
const router = express.Router();

const Todo = require("../../models/Todo");

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
});

router.post("/todo", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "Todo successfully deleted." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
