import ItemSubCategoryModel from '../../models/Item/ItemSubCategoryModel.js'

const AllDelete = async(req,res) => {
    const data = await ItemSubCategoryModel.find(); 
    if(data==null)
        res.send({status:"Warn",message:"No Sub-Category Found, Empty Data..."});
    // res.status(404).send({status:"Warn",message:"No Sub-Category Found, Empty Data..."});
    else{
    await ItemSubCategoryModel.deleteMany();   
    res.send({status:"Success",message:"All Sub Categories Deleted Successfully....."});
    // res.status(200).send({status:"Success",message:"All Sub Categories Deleted Successfully....."});
    }
}

const DeleteByCategory = async(req,res) =>{
    const data = await ItemSubCategoryModel.findOne({CategoryName:req.params.category}); 
    if(data==null)
        res.send({status:"Warn",message:`Record of ${req.params.category} Category not found.....`});
    // res.status(404).send({status:"Warn",message:`Record of ${req.params.category} Category not found.....`});
    else{
    await ItemSubCategoryModel.deleteOne({CategoryName:req.params.category}); 
    res.send({status:"Success",message:"Category Deleted Successfully....."});
    // res.status(200).send({status:"Success",message:"Category Deleted Successfully....."});
    }

}

export default {AllDelete, DeleteByCategory};