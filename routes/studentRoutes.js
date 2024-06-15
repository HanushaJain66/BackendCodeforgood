import express from 'express';
import { createStudent ,getStudentDetails,attendence,updateStudent,allStudentUnderMentor} from '../controller/studentController.js';
const studentRouter = express.Router();

studentRouter.route('/createStudent')
.post(createStudent);

studentRouter.route('/student/:stuId')
.get(getStudentDetails)
.put(updateStudent)
.post(attendence);

studentRouter.route('/mentor/:mentorId')
.get(allStudentUnderMentor);

export default studentRouter;