import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserEID:{type: String, required: [true,"EmailID is Required"], trim: true, unique:true},
    UserPassword:{type: String, required:true, trim: true},
    UserFirstName:{type: String, required:true, trim: true},
    UserLastName:{type: String, required:true, trim: true},
    UserMobileNo:{type: Number, required:true, trim: true},
    UserGender:{type: String, required:true, trim: true},
    UserDob:{type: String, required:true, trim: true},
    UserState:{type: String, required:true, trim: true},
    UserCity:{type: String, required:true, trim: true},
    UserPincode:{type: String, required:false, trim: true},
    UserAddress:{type: String, required:false, trim: true}
});

const UserModel = mongoose.model("UserDetails", UserSchema)
export default UserModel; 