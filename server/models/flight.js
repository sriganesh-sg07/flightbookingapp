import mongoose from "mongoose"
const FlightSchema = new mongoose.Schema({
    flightNumber: {
      type: String,
      required: true,
      unique: true
    },
    flightName:{
        type: String,
        required: true,
    },
    fromLocation: {
        type: String,
        required: true,
    },
    toLocation: {
        type: String,
        required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    arrival: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    
    user: [{
        id:mongoose.Schema.Types.ObjectId,name:String,bdate:String
    }],
  });
  export const Flight = mongoose.model('Flight', FlightSchema);
  
 
  