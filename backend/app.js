const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api", require("./routes/api/todo"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
