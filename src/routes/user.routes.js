import { Router } from "express";
import {createBooking,getBooking} from '../controllers/booking.controller.js'
const userRouter = Router();

userRouter.post("/Booking", createBooking);
userRouter.get("/getAllData", getBooking);

export default userRouter;
