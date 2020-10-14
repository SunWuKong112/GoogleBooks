const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a title for book"
  },
  description: {
    type: String,
    trim: true,
    required: "Enter a description"
  },
  authors: {
    type: Object,
    required: "Enter authors"
  },
  image:{
    type: String,
    required: "Enter a cover image"
  },
  link:{
    type: String,
    required: "Enter a link"
  },
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("books", bookSchema);

module.exports = Books;