import mongoose from "mongoose";

const studentdetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fathar: { type: String, required: true },
  standerd: { type: String, required: true },
  mobile: { type: String, required: true },
  fee: { type: String, required: true },
  local: { type: String },
  update: { type: String },
});
const studentModel = mongoose.model("studentadd", studentdetailsSchema);

export default studentModel;
