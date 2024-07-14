import ItemSubCategoryModel from "../../models/Item/ItemSubCategoryModel.js";

const UpdateSubCategory = async(req,res) =>{
    const {CategoryName,CategoryDisc} = req.body
    if(CategoryName){
        const data = await ItemSubCategoryModel.findOne({CategoryName:req.params.category}); 
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
    res.send({status:"Unsuccess",message:"Empty Category Name, New Category to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"Empty Category Name, New Category to Update Not Found..."});
}

export default UpdateSubCategory;
 