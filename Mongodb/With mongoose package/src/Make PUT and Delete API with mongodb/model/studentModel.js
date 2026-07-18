
import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

 const studentModel= mongoose.model('test',studentSchema);
 export default studentModel;
