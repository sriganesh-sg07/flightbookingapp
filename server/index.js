import express, { response } from "express";

const app=express()
import mongoose from "mongoose"
import cors from "cors"
import {Flight} from "./models/flight.js"
import {User} from "./models/user.js"

mongoose.connect("mongodb+srv://nsriganesh2002:goldfish@cluster0.vo6yxrm.mongodb.net/").then(console.log("db connected"))
app.use(express.json())
app.use(cors())

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
}); 

app.post('/userlogin', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  
  if (password===userDoc.password) {
    res.status(200).json('login successful');
  }
  else {
    res.status(400).json('wrong credentials');
  }
});

app.post('/adminlogin', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  
  if (password===userDoc.password) {
    res.status(200).json('login successful');
  }
  else {
    res.status(400).json('wrong credentials');
  }
});

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


  app.post('/user/:id/bookingflights',async(req,res)=>{
    const{id}=req.params;
    const{flightName,flightNumber,date,arrival}=req.body;
    // console.log(flightNumber)
    try{
      const data=await User.findById(id)
      // console.log(data)
      const{flightBooked:cflightBooked}=data;
      console.log(cflightBooked.length)
      
      
      const flightdata=await Flight.findOne({flightNumber:flightNumber,arrival})
      // console.log(flightdata)
      const{user:cuser}=flightdata;
      console.log(cuser.length)
      
      if(cuser.length<=60){
        cflightBooked.push({flightName,flightNumber,date})
        //console.log(cflightBooked.length)
        await User.findByIdAndUpdate(id,{flightBooked:cflightBooked})
        cuser.push(id)
        //console.log(cuser.length)
        await Flight.findOneAndUpdate({flightNumber},{user:cuser})
        res.status(200).json("Booked successfully")
      }
      else{
        res.status(400).json("Flight capacity full");
      }
    }

    catch(e){
      res.status(404).json(e)
    }
  })



  app.get('/user/flights/:id',async(req,res)=>{
    const{id}=req.params
    const data=User.findById(id)
    if(data){
	    if(data.flightBooked.length===0){
	      res.status(404).json("There no flights booked by this particular user")
	    }
	    else{
	      res.status(200).json({Bookedflights:data.flightBooked})
	    }
    }
    else{
	    res.status(400).json("Data not found")
    }
  })

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

  app.post("/admin/booking",async(req, res) =>{
    const{flightNumber,arrival}=req.body
    try{
      const data=await Flight.findOne({flightNumber:flightNumber,arrival:arrival})
      res.status(200).json("bookings : "+data.user.length)
    }
    catch(err){
    res.status(400).json("not found")
    }
  })

 












app.listen(3000,() =>{
  console.log("Server is on")
})