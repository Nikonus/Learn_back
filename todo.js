import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,

  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subtodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"sub_todo"
    }
  ]
}, { timestamps: true });
export const todo = mongoose.model('todo', todoSchema);
