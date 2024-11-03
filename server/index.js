const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
const mongoose = require("mongoose");
const main = () => {
  mongoose
    .connect("mongodb://localhost:27017/people_db")
    .then(() => {
      console.log("Server connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting MongoDB", err);
    });
};
main();
const peopleRouter = require("./routes/peopleRouter");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/peopleRouter", peopleRouter);

app.listen(port, () => {
  console.log(`Server run at the port ${port} http://localhost:${port}`);
});
