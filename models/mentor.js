import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:4,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:6
    },
    phone:{
        type:Number,
        unique:true,
        required:true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.'],
    },
    PAN:{
        type:String,
        default:'        ',
        minlength:8,
    },
    address:{
        state:{
            type:String,
        },
        city:{
            type:String,
        },
        street:{
            type:String,
        },
        zipcode:{
            type:Number,
            match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code.'],
        }
    },
    role:{
        type:String,
    },
    stuId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'hackathonstudents'
        }
    ]
});

const Mentor = mongoose.model('mentors',mentorSchema);
export default Mentor;
