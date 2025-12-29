import mongoose from "mongoose"
const petientSchema = new mongoose.Schema({
  name:{
    type:String
    ,required:true
  }
  ,diagnosedWith:{
    type :String,
    requred:true
  }
  ,address:{
    type:String,
    required:true
  }
  ,age:{
    type:Number
    ,required:Number
  }
  ,bloodgroup:{
    type:String,
    required:true
  }
  ,gender:{
    type:String
    ,enum:["MALE", "FEMALE", "OTHER"]
    ,required:true
  }
  ,admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"

  }
},{timestamps:true})
export const Petient = mongoose.model("Petient", petientSchema )