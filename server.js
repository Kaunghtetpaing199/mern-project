if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

//mongodb connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

const authRouter = require("./routes/auth");
const addBooksRouter = require("./routes/books");

server.use("/api", authRouter);
server.use("/api", addBooksRouter);

const port = process.env.PORT || 3000;

server.listen(port, () =>
  console.log(`Server start listening at port ${port}`)
);
