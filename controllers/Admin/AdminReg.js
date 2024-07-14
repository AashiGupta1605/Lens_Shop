import AdminModel from "../../models/Admin/AdminModel.js";
import bcryptjs from 'bcryptjs';

const AdminReg = async(req,res) => {
    const {AdminMailID,AdminPassword,AdminRePassword} =req.body;
    if(AdminMailID&&AdminPassword&&AdminRePassword){
        const data = await AdminModel.findOne({AdminMailID}); 
        if(data==null){
            if(AdminPassword===AdminRePassword){
                const pswdkey = await bcryptjs.genSalt(12);
                
                // req.body.AdminPassword = await bcryptjs.hash(req.body.AdminPassword,pswdkey);//data store only in req.body.AdminPassword not in AdminPassword
                // console.log("Hashed Password from Reg : ", req.body.AdminPassword)
                // console.log("Hashed Password from Reg : ", AdminPassword)
                // AdminPassword = await bcryptjs.hash(AdminPassword,pswdkey) //AdminPassword is const var can't change it's value
                
                const bcryptPassword = await bcryptjs.hash(AdminPassword,pswdkey)
                console.log("Hashed Password from Reg : ", bcryptPassword)
                const doc = new AdminModel({AdminMailID,AdminPassword:bcryptPassword})
                await doc.save();
                res.send({status:"Success",message:"Admin Registered Successfully...."});
                // res.status(200).send({status:"Success",message:"Admin Registered Successfully...."});
            }
            else
            res.send({status:"Warn",message:"Enter Re-Password Carefully...."});
            // res.status(422).send({status:"Warn",message:"Enter Re-Password Carefully...."});
        }
        else
        res.send({status:"Warn",message:"This Account already Exists....."})
        // res.status(409).send({status:"Warn",message:"This Account already Exists....."})
    }
    else
    res.send({status:"Unsuccess",message:"Data Not Filled...."});
    // res.status(422).send({status:"Unsuccess",message:"Data Not Filled...."});
}

export default AdminReg;