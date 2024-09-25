import express from "express";
import dotenv from "dotenv/config";
import usermodal from "./backend/db/User.js";
import "./backend/db/Config.js";
import studentModel from "./backend/db/Adddetails.js";
import cors from "cors";
// App
const app = express();
// middlewere
app.use(express.json());
app.use(cors());
//Api singup
app.post("/singup", async (req, res) => {
  let user = new usermodal(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

// api login

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await usermodal.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "result no user found" });
    }
  } else {
    res.send({ result: "result no user found" });
  }
});

// student details adding api
app.post("/add-details", async (req, res) => {
  let student = new studentModel(req.body);

  let result = await student.save();
  res.send(result);
});
// student detail get by database api
app.get("/student-list", async (req, res) => {
  let result = await studentModel.find();
  if (result.length > 0) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});

// student detail get data by single data api
app.get("/update/:id", async (req, res) => {
  let result = await studentModel.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record Found" });
  }
});

// student detail update by single data api

app.put("/update/:id", async (req, res) => {
  let result = await studentModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

// student detail search api
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let result = await studentModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { fathar: { $regex: req.params.key } },
      { standerd: { $regex: req.params.key } },
      { mobile: { $regex: req.params.key } },
      { fee: { $regex: req.params.key } },
      { local: { $regex: req.params.key } },
      { update: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

// Port
app.listen(process.env.PORT, () => {
  console.log(`surver is runing on ${process.env.PORT}`);
});
