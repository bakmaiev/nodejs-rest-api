import { Schema, model } from "mongoose";
import { handleSaveError, validateAtUpdate } from "./hooks.js";

const contactShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactShema.pre("findOneAndUpdate", validateAtUpdate);

contactShema.post("save", handleSaveError);
contactShema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactShema);

export default Contact;
