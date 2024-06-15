import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
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
    status:{
        type:String,
        enum:['active','suspended'],
        default:'active',
    },
    role:{
        type:String,
        enum:['user','admin','librarian'],
        default:'user'
    },
    borrowedBooks:[{
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'libbooks',
        },
    }],
    validTill:{
        type:Date,
        default:Date.now()
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
    }
},{
    timestamps:true,
});

const User = mongoose.model('libusers',userSchema);

export default User;
