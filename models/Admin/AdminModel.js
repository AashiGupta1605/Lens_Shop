import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    AdminMailID:{type: String, required: [true,"EmailID is Required"], trim: true,unique:true},
    AdminPassword:{type: String, required:true, trim: true},
});

const AdminModel = mongoose.model("AdminDetails", AdminSchema)
export default AdminModel;