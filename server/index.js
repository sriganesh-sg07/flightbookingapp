import express, { response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose"
import cors from "cors"
import {Flight} from "./models/flight.js"
import {User} from "./models/user.js"
import {Admin} from "./models/admin.js"

const app=express()

mongoose.connect("mongodb+srv://nsriganesh2002:goldfish@cluster0.vo6yxrm.mongodb.net/").then(console.log("db connected"))
app.use(express.json())
app.use(cors())








//user registration
app.post('/userregister', async (req, res) => {
  const { username, password } = req.body;
  
  // Check if the username is already taken
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(400).json('Username already exists');
    return;
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user document with the hashed password
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  // Save the user document
  await newUser.save();

  res.status(200).json('Registration successful');
});



//admin login
app.post('/adminlogin', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await Admin.findOne({ username });
  //console.log(userDoc);
  if (!userDoc) {
    res.status(400).json('Admin not found');
    return;
  }

  const isPasswordMatch = await bcrypt.compare(password, userDoc.password);

  if (isPasswordMatch) {
    const token = jwt.sign({ username: userDoc.username }, 'your_secret_key');
    //console.log(token)
    res.status(200).json({ token: token });
  } else {
    res.status(400).json('Wrong credentials');
  }
});






//user login
app.post('/userlogin', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const {id}=userDoc;
  console.log(userDoc);
  if (!userDoc) {
    res.status(400).json('User not found');
    return;
  }

  const isPasswordMatch = await bcrypt.compare(password, userDoc.password);

  if (isPasswordMatch) {
    const token = jwt.sign({ username: userDoc.username }, 'your_secret_key');
    console.log(token)
    
    res.status(200).json({ token: token ,id});
    
    
  } else {
    res.status(400).json('Wrong credentials');
  }
});

//authentication for both admin and user login
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json('Access denied');
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).json('Invalid token');
    }
    req.username = decoded.username;
    next();
    
  });
}












//admin flight data upload
app.post('/flight/populate',async(req,res)=>{
  const{flightNumber,flightName,fromLocation,toLocation,departure,arrival,date,user}=req.body
  const entryset=new Flight({flightNumber,flightName,fromLocation,toLocation,departure,arrival,date,user})
      const resi=await entryset.save();
      try{
      res.status(201).json({
          _id:resi._id,
          name:resi.name
      })        
  }
  catch(err){
      res.status(500).json(err);
  }
})


//user searches for flight based on date and time
app.post('/flight/find',async(req,res)=>{
  const {date,time}=req.body;
  const data=await Flight.find({date:date,arrival:time})
  const result=[]
  data.map((res)=>result.push({flightName:res.flightName,FlightNumber:res.flightNumber}))
  if(data) res.status(200).json(result);
  else{
    res.status(400).json("No flights available");
  }
  })

//user Booking tickets on a flight based on availability (assuming the default seat count is 60)
  app.post('/user/:id/bookingflights',async(req,res)=>{
    const{id}=req.params;
    const{flightName,flightNumber,date,arrival,name,bdate}=req.body;
    // console.log(flightNumber)
    try{
      const data=await User.findById(id)
      // console.log(data)
      const{flightBooked:cflightBooked}=data;
      console.log(cflightBooked.length)
      
      
      const flightdata=await Flight.findOne({flightNumber:flightNumber,arrival})
      // console.log(flightdata)
      const{user:cuser}=flightdata;
     
      
      if(cuser.length<=60){
        cflightBooked.push({flightName,flightNumber,date})
        //console.log(cflightBooked.length)
        await User.findByIdAndUpdate(id,{flightBooked:cflightBooked})
        cuser.push({id,name,bdate})
        //console.log(cuser.length)
        await Flight.findOneAndUpdate({flightNumber},{user:cuser})
        res.status(200).json({message:"Booked successfully",available_seats:60-cuser.length})
        console.log(60-cuser.length)
      }
      else{
        res.status(400).json("Flight capacity full");
      }
    }

    catch(e){
      res.status(404).json(e)
    }
  })


// user 	My Booking -> to list out all the bookings made by that user
  app.get('/user/flights/:id',async(req,res)=>{
    const{id}=req.params
    const data=await User.findById(id)
    console.log(data);
    if(data){
	    if(data.flightBooked.length===0){
	      res.status(400).json("There is no flights booked by this particular user")
	    }
	    else{
	      res.status(200).json({Bookedflights:data.flightBooked})
	    }
    }
    else{
	    res.status(400).json("Data not found")
    }
  })


  //admin 	Remove flights
  app.post("/admin/removeflight",async(req, res) =>{
    
    const{flightNumber,arrival}=req.body
    
    try{
    const data=await Flight.findOneAndDelete({flightNumber:flightNumber,arrival:arrival})
    //console.log(data)
    res.status(200).json("deleted successfully")
  }
    catch(err){
      res.status(400).json("not found")
    }
  })


  //admin View all the booking based on flight number and time
  app.post("/admin/booking",async(req, res) =>{
    const{flightNumber,arrival}=req.body
    
    try{
      const data=await Flight.findOne({flightNumber:flightNumber,arrival:arrival})
      res.status(200).json(data.user)
    }
    catch(err){
    res.status(400).json("not found")
    }

  })

 












app.listen(3000,() =>{
  console.log("Server is on")
})