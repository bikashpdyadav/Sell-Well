const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // To handle CORS issues if React and Node.js are on different domains
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const port = 3000;
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(
  session({
    secret: "Team little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

main().catch((err) => console.log(err));
async function main() {
  //await mongoose.connect("mongodb://127.0.0.1:27017/userDataBase");
  await mongoose.connect(
    "mongodb+srv://alamd4228:yA7nSKM0EAwEq5G9@teams.1b8f6.mongodb.net/userDataBase"
  );

  const itemSchema = new mongoose.Schema({
    selectedData: String,
    selectedTime: String,
    address: String,
    weight: String,
  });
  const userSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    avatar: String,
    itemForSale: [itemSchema],
  });

  userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

  const User = mongoose.model("User", userSchema);
  const Item = mongoose.model("Item", itemSchema);

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.post("/signUp", async (req, res) => {
    const { name, email, password} = req.body;

    var user = new User({
      name: name,
      email: email,
      itemForSale: [],
    });

    const registeredUser = await User.register(user, password);
    // console.log(registeredUser);
    console.log("registered successful");
    return res.json({ message: "SignUp successful",userId:registeredUser._id });
  });

  app.post("/avatar",async (req, res) => {
    const { avatar, userId } = req.body;

   console.log(avatar);
   console.log(userId);

    // Save the avatar to the user's profile in the database (example using MongoDB)
    // Assuming you have a User model and the user is authenticated (req.user)

    

    if (!avatar||!userId) {
      return res.status(400).json({ error: "No avatar selected or userID provided" });
    }
    User.findByIdAndUpdate(userId, { avatar }, { new: true })
      .then((updatedUser) => {
        res.status(200).json({
          message: "Avatar updated successfully",
          avatar: updatedUser.avatar,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Failed to update avatar" });
      });
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    passport.authenticate("local", async (err, user, info) => {
      if (err) {
        console.log(err);
        return res.redirect("/login");
      }

      if (!user) {
        console.log("User not found");
        return res.status(401).json({ error: "Invalid email or password" });
      }

      req.login(user, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Login failed" });
        }

        passport.authenticate("local")(req, res, async function () {
          console.log("Login successful");

          return res.json({ message: "Login successful", user: req.user });
        });
      });
    })(req, res);
  });

  

  app.post("/selectedSchedule", async (req, res) => {
    try {
      const { selectedDate, selectedTime, address, weight } = req.body;

      // Ensure the user is authenticated

      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      console.log(req.user._id);
      const item = new Item({
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        address: address,
        weight: weight,
      });

      // Add the item to the user's itemForSale array and save
      const foundUser = req.user;
      foundUser.itemForSale.push(item);
      const newUserUpdate = await foundUser.save();

      console.log("Updated user:", newUserUpdate);
      console.log("user updated");
      return res.json({
        message: "Schedule posted successfully",
        data: req.body,
      });
    } catch (error) {
      console.error("Error posting schedule:", error);
      return res.status(500).json({ error: "An error occurred" });
    }
  });

  app.post("/logout", async (req, res) => {
    // console.log(req.user);
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to log out" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });

  app.get("/", async function (req, res) {
    res.send("Hello World");
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
