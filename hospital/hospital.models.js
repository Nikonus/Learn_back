import mongoose from "mongoose"
const hospitalSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true

  },
  adderssLine1:{
    type:String,
    required:true
  },
  adderssLine2:{
    type:String,
    
  },
  city:{
    type:String,
    requred:true
  },
  pincode:{
    type:String,
    required:true
  }
  ,speciality:{
    type:String,
    requred:true
  }
},{timestamps:true})
export const Hospital = mongoose.model("Hospital", hospitalSchema )