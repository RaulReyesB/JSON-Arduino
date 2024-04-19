import { Schema, model } from "mongoose";

const socketSchema = new Schema(
  {
    distance: {
      type: Number,
    },
    temperature: {
      type: Number 
    },
    humidity: {
      type: Number 
    },
    date: {
      type: Date,
    },
    hour: {
      type: String, 
    },
    ledStatus: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Socket", socketSchema);
