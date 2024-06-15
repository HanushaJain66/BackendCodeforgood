import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const signUpUser = async (req,res)=>{
    try{
        const { username, email, password, phone} = req.body;
        if(!username || !email || !password || !phone){
            return res.status(400).json({
                status:'fail',
                message:"All fields are Required"
            })
        }
        const userAlreadyExist = await User.findOne({$or:[
            {username:username},
            {email:email},
            {phone:phone}
        ]})
        if(userAlreadyExist){
            if(userAlreadyExist.username===username){
                return res.status(400).json({
                    status:'fail',
                    message:"User with this Username already Exist"
                })
            }
            else if(userAlreadyExist.email===email){
                return res.status(400).json({
                    status:'fail',
                    message:"User with this Email already Exist"
                })
            } else if(userAlreadyExist.password===password){
                return res.status(400).json({
                    status:'fail',
                    message:"User with this Password already Password"
                })
            }
        }
        const hashedPass = await bcrypt.hash(password,10);
        const newUser = new User({
            username:username,
            email:email,
            password:hashedPass,
            phone:phone
        })
        await newUser.save();
        return res.status(200).json({
            status:"success",
            message:"new User Registered Successfully"
        })
    } catch(error){
        console.log("Error while sign up the user ",error.message);
        return res.status(500).json({
            status:'fail',
            message:"Error while signing in the user"
        })
    }
}

export const LoginUser = async (req,res)=>{
    try{
        if(!req.body.email || !req.body.password){
            return res.status(400).json({
                status:'fail',
                message:"All fields are Required"
            })
        }
        const findUser = await User.findOne({email:req.body.email}).select('+password');

        if(!findUser){
            return res.status(404).json({
                status:'fail',
                message:'No User with this Email found'
            })
        }

        const compare = await bcrypt.compare(req.body.password,findUser.password);
        if(!compare){
            return res.status(400).json({
                status:'fail',
                message:'Password do not match'
            })
        }
        const {password,...useWithoutPassword} = findUser;
        const token = await jwt.sign(useWithoutPassword,process.env.JWT_SECRET,{expiresIn:'25d'});
        return res.status(200).json({
            status:'success',
            message:'User Loged in Successfully',
            token:token,
            findUser
        })
    } catch(error){
        console.log("Error while logging in the user ",error.message);
        return res.status(500).json({
            status:'fail',
            message:'Error while logging in the user'
        })
    }
}