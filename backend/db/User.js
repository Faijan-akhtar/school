import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const usermodal = mongoose.model("users", userSchema);
export default usermodal;
