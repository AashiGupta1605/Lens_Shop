import jwt from 'jsonwebtoken';
// const jwtkey='admin key'

const AdminVarification=(req,res,next )=>{
    const AdminToken=req.headers["authorization"].split(" ")[1];
        if(AdminToken){
            // console.log("Token for verification : ",AdminToken)
            // console.log("Secret Key : ",process.env.jwtAdminSecretKey)
            jwt.verify(AdminToken,process.env.jwtAdminSecretKey,(err,valid)=>{
                if(err){
                    res.status(401).send("Enter Valid Token")
                }
                else{
                    next()
                }
            })
        }
        else{
            res.status(403).send("Token not found");
        }
}

export default AdminVarification;