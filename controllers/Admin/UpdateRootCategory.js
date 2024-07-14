import ItemRootCategoryModel from '../../models/Item/ItemRootCategoryModel.js'

const UpdateRootCategory = async(req,res) =>{
    if(req.body.CategoryName){
        const data = await ItemRootCategoryModel.findOne({CategoryName:req.params.category}); 
        if(data==null)
            res.send({status:"Warn",message:"Category not found....."});
        // res.status(404).send({status:"Warn",message:"Category not found....."});
        else{
            data=req.body;
            data.save();
            res.send({status:"Success",message:"Category Updated Successfully......"});
            // res.status(200).send({status:"Success",message:"Category Updated Successfully......"});
    }
}
    else
    res.send({status:"Unsuccess",message:"Empty Category, New Category to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"Empty Category, New Category to Update Not Found..."});
}

export default UpdateRootCategory;
