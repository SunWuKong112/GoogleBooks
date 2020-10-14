const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes =require("./routes");
// console.log(`process.env: ${process.env}`);

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

// mongodb+srv://SunWuKong112:password@cluster0.esf53.azure.mongodb.net/BookThing?retryWrites=true&w=majority

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}.`);
});