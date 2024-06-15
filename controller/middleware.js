import jwt from 'jsonwebtoken';
import {promisify} from 'util';

const MiddlewareAuth = (req,res)=>{
    try{
        if(!req.headers.authorization && !req.headers.authorization.startsWith('Bearer')){
            return res.status(400).json({
                status:"fail",
                message:"No Authentication token is present"
            })
        }
        const token = req.headers.authorization.split(' ')[1];
        const verify = promisify(jwt.sign)(token,process.env.JWT_SECRET);
        if(verify){
            next();
        } else{
            return res.status(400).json({
                status:"fail",
                message:"User is not Authenticated"
            })
        }
    } catch(error){
        console.log("Error while Authenticating the User");
        return res.status(500).json({
            status:"fail",
            message:"Error while authenticating the User"
        })
    }
}
export default MiddlewareAuth;