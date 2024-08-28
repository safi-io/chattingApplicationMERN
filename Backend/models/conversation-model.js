import mongoose from "mongoose";

// Schema
const converstaionSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
      },
    ],
  },
  { timestamps: true }
);

// Model
const converstaion = mongoose.model("converstaion", converstaionSchema);

export default converstaion;
