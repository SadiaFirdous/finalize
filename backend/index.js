const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/user");
const ProjectModel = require("./models/project");
const authenticate = require("./middleware/authenticate");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://dbms_finalize:finalize123@cluster0.5ndw9.mongodb.net/Finalize?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
// app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.post("/register", async (req, res) => {
  console.log(JSON.stringify(req.body));
  try {
    const userExists = await UserModel.findOne({
      email: req.body.email,
    });
    if (userExists) {
      return res.status(403).json({
        error: "Account already exists",
      });
    }
    const user = new UserModel({
      email: req.body.email,
      password: req.body.password,
      isTeacher: req.body.isTeacher,
    });
    await user.save();
    console.log("OK");
    res.send("OK");
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});
app.post("/login", async (req, res) => {
  console.log("hi");
  const user = await UserModel.findOne({ email: req.body.email });
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  console.log(token);
  res.cookie("jwtoken", token, {
    httpOnly: true,
  });
  res.send();
});
app.get("/data", authenticate, (req, res) => {
  res.send(req.rootUser);
});
app.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("Logged Out");
});
app.post("/creategroupapi", authenticate, async (req, res) => {
  console.log(req.rootUser);
  console.log(req.body);
  const data_recv = {
    projectTitle: req.body.projectTitle,
    aboutProject: req.body.aboutProject,
    projectDeadline: req.body.date,
    link: req.body.link,
    submittedData: [],
  };
  const project = new ProjectModel(data_recv);
  project.save(async () => {
    console.log("CREATING NEW GROUP");
    console.log(project._id.toString());
    const newProject = await ProjectModel.findOneAndUpdate(
      {
        _id: project._id.toString(),
      },
      {
        $set: {
          link: "http://localhost:3000/invite/" + project._id.toString(),
        },
      }
    );
  });
  // console.log("REQ.ROOTSUER.ID");
  // console.log(req.rootUser.id);
  const user = await UserModel.updateOne(
    { _id: req.rootUser.id },
    {
      $push: { data: project._id },
    }
  );
  res.status(200).send();
});
app.get("/displaygroups", authenticate, async (req, res) => {
  console.log(req.rootUser);
  const data_send = [];
  for (let i = 0; i < req.rootUser.data.length; i++) {
    const project = await ProjectModel.find({ _id: req.rootUser.data[i] });
    data_send.push(project[0]);
  }
  console.log(data_send);
  res.status(200).send(data_send);
});

app.post("/invite", authenticate, async (req, res) => {
  console.log("IN INVITE API");
  const user = await UserModel.findOneAndUpdate(
    { _id: req.rootUser.id },
    { $push: { data: ObjectId(req.body.groupId) } }
  );
  res.status(200).send();
});
app.post("/addstudentproject", authenticate, async (req, res) => {});
app.post("/deletegroup", authenticate, async (req, res) => {
  console.log("GROUP ID RECEIVED");
  console.log(req.body._id);
  (await UserModel.find()).forEach(async (doc) => {
    await UserModel.updateOne(
      { _id: doc._id },
      { $pull: { data: ObjectId(req.body._id) } }
    ).then(console.log("deleted one record"));
  });

  await ProjectModel.deleteOne({ _id: ObjectId(req.body._id) }).then(
    console.log("deleted from projects")
  );

  res.status(200).send();
});
app.listen(3001, () => {
  console.log("Server started");
});
