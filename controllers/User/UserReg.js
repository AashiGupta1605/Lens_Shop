import UserModel from "../../models/User/UserModel.js";
import bcryptjs from 'bcryptjs';

const UserReg = async(req,res) => {
    const {UserEID, UserPassword, UserRePassword,UserFirstName,UserLastName,UserMobileNo,UserGender,UserDob,UserState,UserCity,UserPincode,UserAddress} =req.body;
    if(UserEID && UserPassword && UserRePassword && UserFirstName && UserMobileNo && UserGender && UserDob && UserCity && UserState && UserLastName){
        if(UserPassword===UserRePassword){
            const pswdkey = await bcryptjs.genSalt(12);
            req.body.UserPassword = await bcryptjs.hash(req.body.UserPassword,pswdkey);
            
            const doc = new UserModel({UserEID, UserPassword,UserFirstName,UserLastName,UserMobileNo,UserGender,UserDob,UserState,UserCity,UserPincode,UserAddress})
            await doc.save();
            res.send({status:"Success",message:"Registered Successfully"});
        }
        else
        res.send({status:"Unsuccessful",message:"Enter Re-Password Carefuly"});
    }
    else
    res.send({status:"Unsuccessful",message:"Data Not Filled"});
}

export default UserReg;