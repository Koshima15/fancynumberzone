const express = require("express");

const Routes = express.Router();

Routes.get("/" , (req,res,next) => {
    res.render("userView/index",{ pageTitle : 'Fancy Number Zone'})
});

Routes.get("/categories" , (req,res,next) => {
    res.render("userView/categories",{ pageTitle : 'Categories'})
});

Routes.get("/contactUs" , (req,res,next) => {
    console.log(req.body);
    res.render("userView/contactUs",{ pageTitle : 'Contact Us'})
})

Routes.get("/login" , (req,res,next) => {
    console.log(req.body);
    res.render("userView/login",{ pageTitle : 'Log-In'})
})

// Routes.get("/cart" , (req,res,next) => {
//     console.log(req.body);
//     res.render("userView/cart")
// })


module.exports = Routes;