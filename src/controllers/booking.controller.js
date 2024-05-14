import { Booking } from "../models/booking.js";

export const createBooking = async (req, res) => {
  try {
    const { username, roomNumber, checkOutDate } = req.body;
    console.log(username);
    const newBooking = new Booking({
      username,
      roomNumber,
      checkOutDate,
    });
    const savedBooking = await newBooking.save();
    res.status(201).send({ savedBooking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBooking = async (req, res) => {
  try {
    const savedBooking = await Booking.find();
    res.status(200).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
