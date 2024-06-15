import express from 'express';
import { createStudent ,getStudentDetails,attendence} from '../controller/studentController.js';
const studentRouter = express.Router();

studentRouter.route('/createStudent')
.post(createStudent);

studentRouter.route('/student/:stuId')
.get(getStudentDetails)
.put(attendence);

export default studentRouter;