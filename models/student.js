import mongoose from "mongoose";
const Student = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        default:0,
    },
    dob:{
        type:Date,
        required:true,
    },
    totalClassAttended:{
        type:Number,
        default:0
    },
    adhar:{
        type:Number,
        default:0,
    },
    currClass:{
        type:String,
        default:'1st'
    },
    levels:{
        type:String,
        enum:['a','b','c','d'],
        default:'a'
    },
    socioEmotion:{
        type:Number,
        default:0,
    },
    learning:{
        type:Number,
        default:0,
    },
    numeric:{
        type:Number,
        default:0,
    },
})
const StuModel = mongoose.model("hackathonstudents",Student);
export default StuModel;