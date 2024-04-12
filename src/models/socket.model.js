import { Schema, model } from "mongoose";

const socketSchema = new Schema(
  {
    servoMotor: {
      type: Boolean,
      default: false,
    },
    led: {
      type: Boolean,
      default: false,
    },
    dht11: {
      type: Boolean,
      default: false,
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
    status: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Socket", socketSchema);
