import UserModel from "../../models/User/UserModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const UserLogin = async(req,res)=>{
    const { UserEID, UserPassword } = req.body;
    if (UserEID && UserPassword){
        const data = await UserModel.findOne({UserEID}); 
        if(data!=null){
            const chkPswd=await bcryptjs.compare(UserPassword,data.UserPassword)
            if(UserEID===data.UserEID && chkPswd){
                const token = jwt.sign({UserEID:data.UserEID, UserPassword:data.UserPassword}, process.env.jwtUserSecretKey,{expiresIn:"1d"});
                console.log(token);
                res.send({status:"Login Successfully.......",token});
            }
            else
            res.send("Incorrect ID/Password.....Re-enter Properly....");
        }
        else
        res.send("You are not Registered, register first.....");
    }
    else
    res.send({status:"Login Unsuccessful",message:"Incomplete Data"});
}

export default UserLogin;