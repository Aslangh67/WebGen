var express = require("express")
var router = express.Router()
var db = require("../models");


router.post("/createuser", function(req, res) {
    console.log(req.body);
    
    db.Account.create({
        account_owner:req.body.name,
        company_name:req.body.company,
        phone:req.body.phone,
        route:req.body.company.toLowerCase()
      }).then(function(data){
        res.send(data)
      })
    db.User.create({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        Roleid:1
      }).then(function(data){
        res.send(data)
      })
    })

module.exports = router;