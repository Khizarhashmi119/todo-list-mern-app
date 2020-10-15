if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const todosRoutes = require("./routes/api/todo-routes");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB is connected...");
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json({ extended: false }));
app.use(morgan("dev"));

app.use("/api", todosRoutes);
