
import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

 const studentModel= mongoose.model('school',studentSchema);
 export default studentModel;
