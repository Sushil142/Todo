const mongoose = require('mongoose');
const md5 = require("md5")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  action: {
    type: md5(String),
    required: true
  }
})

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;
