import express from "express"; 
const AdminRoutes = express. Router()

import AdminVerification from '../../middlewares/AdminVerification.js'

import AdminLogin from '../../controllers/Admin/AdminLogin.js';
import AdminReg from '../../controllers/Admin/AdminReg.js';
import AddItem from '../../controllers/Admin/AddItem.js';
import AddRootCategory from '../../controllers/Admin/AddRootCategory.js';
import AddSubCategory from '../../controllers/Admin/AddSubCategory.js';
import DeleteItem from "../../controllers/Admin/DeleteItem.js";
import UpdateItem from '../../controllers/Admin/UpdateItem.js';
import DeleteRootCategory from '../../controllers/Admin/DeleteRootCategory.js';
import DeleteSubCategory from "../../controllers/Admin/DeleteSubCategory.js";
import UpdateRootCategory from "../../controllers/Admin/UpdateRootCategory.js";
import UpdateSubCategory from "../../controllers/Admin/UpdateSubCategory.js";
import DisplayItems from "../../controllers/Admin/DisplayItems.js";
// import DisplayItems from '../../controllers/DisplayItems.js'
import DisplayRootCategories from "../../controllers/Admin/DisplayRootCategories.js";
// import DisplayRootCategories from "../../controllers/DisplayRootCategories.js";
import DisplaySubCategories from "../../controllers/Admin/DisplaySubCategories.js";
// import DisplaySubCategories from "../../controllers/DisplaySubCategories.js";

AdminRoutes.post("/login",AdminLogin);
AdminRoutes.post("/register",AdminReg);

AdminRoutes.post("/additem",AdminVerification,AddItem);
AdminRoutes.post("/addrootcategory",AdminVerification,AddRootCategory);
AdminRoutes.post("/addcategory",AdminVerification,AddSubCategory);

AdminRoutes.get("/getitems",AdminVerification,DisplayItems.getAll)
AdminRoutes.get("/getitems/:id",AdminVerification,DisplayItems.getByID)
AdminRoutes.get("/getitems/:iid",AdminVerification,DisplayItems.getByItemID)
AdminRoutes.get("/getitems/:price",AdminVerification,DisplayItems.getByPrice)
AdminRoutes.get("/getitems/:title",AdminVerification,DisplayItems.getByTitle)
AdminRoutes.get("/getitems/:subCategory",AdminVerification,DisplayItems.getBySubCategory)
AdminRoutes.get("/getitems/:rootCategory",AdminVerification,DisplayItems.getByRootCategory)

AdminRoutes.get("/getcategories",AdminVerification,DisplayRootCategories.getAll)
AdminRoutes.get("/getcategories/:title",AdminVerification,DisplayRootCategories.getByName)

AdminRoutes.get("/getstylecategories",AdminVerification,DisplaySubCategories.getAll)
AdminRoutes.get("/getstylecategories/:title",AdminVerification,DisplaySubCategories.getByName)

AdminRoutes.delete("/deleteitem",AdminVerification,DeleteItem.AllDelete);
AdminRoutes.delete("/deleteitem/:id",AdminVerification,DeleteItem.DeleteByID);
AdminRoutes.delete("/deleterootcategory/:category",AdminVerification,DeleteRootCategory.DeleteByCategory)
AdminRoutes.delete("/deleterootcategory",AdminVerification,DeleteRootCategory.AllDelete)
AdminRoutes.delete("/deletecategory",AdminVerification,DeleteSubCategory.AllDelete)
AdminRoutes.delete("/deletecategory/:category",AdminVerification,DeleteSubCategory.DeleteByCategory)

AdminRoutes.put("/updateitem/:id",AdminVerification,UpdateItem)
AdminRoutes.put("updaterootcategory/:category",AdminVerification,UpdateRootCategory)
AdminRoutes.put("updatecategory/:category",AdminVerification,UpdateSubCategory)

export default AdminRoutes;  


