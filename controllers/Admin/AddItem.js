import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js'

const AddItem = async(req,res) => {
    const {title, discription,itemID,itemCount,itemPrice,rootCategory,subCategory,itemDiscount,imgPath} =req.body;
    if(title && itemID && itemCount&&itemPrice&&rootCategory&&subCategory&&imgPath){
        const data = await ItemDescriptionModel.findOne({itemID}); 
        if(data==null){
            if((itemID.length>10)||(title.length>25)||(title.length<6)||(discription.length>150)){
                res.send({status:"Warn",message:"Filled Details of Item are Inappropriate..."})
            }
            else{
                const doc = new ItemDescriptionModel({title,discription,itemID,itemCount,itemPrice,rootCategory,subCategory,itemDiscount,imgPath})
                await doc.save();
                res.send({status:"Success",message:"Item Added Successfully..."});
            }
        }
        else
        res.send({status:"Warn",message:"This Item ID already Exists..."})
        // res.status(409).send({status:"Warn",message:"This Item ID already Exists..."})
    }
    else
    res.send({status:"Unsuccess",message:"Fill Required Data..."});
    // res.status(422).send({status:"Unsuccess",message:"Fill Required Data..."});
}

export default AddItem;