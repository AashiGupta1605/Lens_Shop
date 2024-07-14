import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js';

const UpdateItem = async(req,res) =>{
    const {title, discription,itemID,itemCount,itemPrice,rootCategory,subCategory} = req.body
    if(title && itemID && itemCount&&itemPrice&&rootCategory&&subCategory){
        const data = await ItemDescriptionModel.findOne({_id:req.params.id}); 
        if(data==null)
            res.send({status:"Warn",message:"Item not found....."});
            // res.status(404).send({status:"Warn",message:"Item not found....."});
        else{
            data=req.body;
            data.save();
            res.send({status:"Success",message:"Item Updated Successfully......"});
            // res.status(200).send({status:"Success",message:"Item Updated Successfully......"});
    }
}
    else
    res.send({status:"Unsuccess",message:"New Data to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"New Data to Update Not Found..."});
}

export default UpdateItem;
