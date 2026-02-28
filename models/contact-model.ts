import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minLength: [3, "Name must be at least 3 characters long."],
      maxLength: [50, "Name must be less than 50 characters long."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email is not valid."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Phone number is not valid."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minLength: [10, "Message must be at least 10 characters long."],
      maxLength: [500, "Message must be less than 500 characters long."],
    },
  },
  {
    timestamps: true,
  },
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
