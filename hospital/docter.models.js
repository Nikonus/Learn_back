import mongoose from "mongoose"


const hospitallhourSchema = new mongoose.Schema({
  hospitalname:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",
    required:true
  },
  workhours:{
    type:Number,
    required:true
  }
})
const docterSchema = new mongoose.Schema({
  name:{
    type:String
    ,required:true,

  },
  salary:{
    type:Number,
    required:true
  },
  qualificatin:{
    type:String,
    required:true
  },
  experinense:{
    type:Stringm,
    default:0
  }
  ,worksInhospital:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }],
  workingHours:{hospitallhourSchema}
    

},{timestamps:true})
export const Docter = mongoose.model("Docter", docterSchema )