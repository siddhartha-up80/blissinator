import { Schema, model, models } from "mongoose";

const CallSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },

  phone: {
    type: String,
    required: [true, "Phone is required."],
  },
  timings: {
    type: String,
    required: [true, "Time is required."],
  },
  gender: {
    type: String,
  },
});

const Call = models.Call || model("Call", CallSchema);


export default Call;
