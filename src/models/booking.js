import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export { Booking };
