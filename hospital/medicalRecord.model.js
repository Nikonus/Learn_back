import mongoose from "mongoose"
const medicalRecordSchema = new mongoose.Schema({
  

  numberofPetient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Petient"
  }
  ,requiremedicin:{
    type:String,
    required:true
  },
  docAvaibilit:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Docter"
  },
  
},{timestamps:true})
export const MedicalRecord = mongoose.model("medicalRecord", medicalRecordSchema )