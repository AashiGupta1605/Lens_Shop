import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js'

const getAll = async(req, res) => {
    const data=await ItemDescriptionModel.find(); 
    if(data==[])
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByTitle = async(req, res) => {
    const data=await ItemDescriptionModel.find({title:req.params.title}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByID = async(req, res) => {
    const data=await ItemDescriptionModel.findOne({_id:req.params.id}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByItemID = async(req, res) => {
    const data=await ItemDescriptionModel.findOne({itemID:req.params.iid}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByPrice = async(req, res) => {
    const data=await ItemDescriptionModel.find({itemPrice:req.params.price}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByRootCategory = async(req, res) => {
    const data=await ItemDescriptionModel.find({rootCategory:req.params.rootCategory}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getBySubCategory = async(req, res) => {
    const data=await ItemDescriptionModel.find({subCategory:req.params.subCategory}); 
    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

export default {getAll,getByID,getByPrice,getByRootCategory,getBySubCategory,getByTitle,getByItemID}
