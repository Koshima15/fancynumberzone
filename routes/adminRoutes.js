const express = require("express");

const Routes = express.Router();


Routes.get("/admin" , (req,res,next) => {
    res.render("adminView/admin",{ pageTitle : 'Dashboard'});
})

Routes.get("/addnumbers" , (req,res,next) => {
    res.render("adminView/addNumbers",{ pageTitle : 'Add Numbers'});
})

Routes.get("/viewnumbers" , (req,res,next) => {
    res.render("adminView/viewNumbers",{ pageTitle : 'View Numbers'});
})
Routes.get("/updatenumbers" , (req,res,next) => {
    res.render("adminView/updateNumbers",{ pageTitle : 'Update Numbers'});
})

Routes.get("/changepassword" , (req,res,next) => {
    res.render("adminView/changePassword",{ pageTitle : 'Change Password'});
})

Routes.get("/viewvendors" , (req,res,next) => {
    res.render("adminView/viewVendors",{ pageTitle : 'View Vendors'});
})

Routes.get("/addvendors" , (req,res,next) => {
    res.render("adminView/addVendors",{ pageTitle : 'Add Vendors'});
})

Routes.get("/buyerlist" , (req,res,next) => {
    res.render("adminView/buyerList",{ pageTitle : 'Buyers List'});
})

module.exports = Routes;