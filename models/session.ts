import { Schema, model, models } from "mongoose";

const SessionSchema = new Schema({
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
  concern: {
    type: String,
    required: [true, "Concern is required."],
  },
  gender: {
    type: String,
  },

  filename: {
    type: String,
  }
});

const Session = models.Session || model("Session", SessionSchema);

export default Session;
