// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const MiddlewareAuth = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         if (!authHeader) {
//             return res.status(401).json({
//                 status: 'fail',
//                 message: 'No token provided. User not authorized.',
//             });
//         }
//         const token = authHeader.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({
//                 status: 'fail',
//                 message: 'Malformed token. User not authorized.',
//             });
//         }
//         await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({
//                     status: 'fail',
//                     message: 'Invalid token. User not authorized.',
//                 });
//             }
//             req.user = decoded;
//             next();
//         });
//     } catch (error) {
//         console.log("Error is not considered ",error.message);
//         return res.status(500).json({
//             status: 'error',
//             message: 'An error occurred during authentication.',
//         });
//     }
// };
// export default MiddlewareAuth;



import jwt from 'jsonwebtoken';
import {promisify} from 'util';

const MiddlewareAuth = (req,res)=>{
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
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