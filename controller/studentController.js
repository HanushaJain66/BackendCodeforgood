import stuModel from "../models/student";

export const createStudent = async (req,res)=>{
    try{
        if(!req.body.name || !req.body.age || !req.body.dob || !req.body.currClass){
            return res.status(400).json({
                status:"success",
                message:"All Fields aree required"
            })
        }
        const newStudent = new stuModel({
            name:req.body.name,
            age:req.body.age,
            dob:req.body.age,
            currClass:req.body.currClass
        })
        await newStudent.save();
    } catch(error){
        console.log("Error while creating a Student");
        return res.status(500).json({
            status:"fail",
            message:"Error while creating a User"
        })
    }
}

export const attendence =  async (req,res) =>{
    try{
        const stuId = req.params.stuId;
        const findStudent = await User.findById(stuId);
        if(findStudent){
            findStudent.totalClassAttended = findStudent.totalClassAttended+1;
        } else{
            return res.status(409).json({
                status:"fail",
                message:"No Student with this Id Found"
            })
        }
        return res.status(200).json({
            status:'Success',
            message:"Attendence Successfull"
        })
    } catch(error){
        console.log("Error while uploading the Attendence");
        res.status(500).json({
            status:"fail",
            message:"Error while mark the Attendence"
        })
    }
}

export const getStudentDetails = async (req,res)=>{
    try{
        const stuId = req.params.studId;
        const findStudent = await Studnet.findById(stuId);
        if(!findStudent){
            return res.status(409).json({
                status:"fail",
                message:"Student with this Id not Exist"
            })
        }
        return res.status(200).json({
            status:"Success",
            message:"Student details fetched Successfully",
            student:findStudentd
        })
    } catch(error){
        console.log("Error while getting student Details");
        res.status(500).json({
            status:"fail",
            message:"Error while getting student details"
        })
    }
}

export const updateStudent = async (req,res)=>{
    try{
        const stuId = req.params.stuId;
        const findAndUpdateStudent = await Blog.findOneAndUpdate({ _id: stuId }, { $set: req.body, updatedAt: Date.now() }, { new: true });
        if(req.body.currClass){
            findAndUpdateStudent.levels = 'a'
            findAndUpdateStudent.socioEmotion = 0;
            findAndUpdateStudent.numeric = 0;
            findAndUpdateStudent.learning = 0;
        }
        if(req.body.socioEmotion===5 || req.body.learning===5 || req.body.numeric===5){
            const levels = findAndUpdateStudent.levels;
            if(levels==='a'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'b';
            } else if(levels==='b'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'c';
            } else if(levels==='c'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'd';
            }
        }
        return res.status(200).json({
            status:"success",
            message:"Error while Updating the Student Schema"
        })
    } catch(error){
        console.log("Error while c")
    }
}