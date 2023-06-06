import mongoose from "mongoose"

// User Model
const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    flightBooked:[{
        flightName:String,
        flightNumber:String,
        date:String,
    }],
  });
  export const User = mongoose.model('User', UserSchema);