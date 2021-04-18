const express = require("express");
const router = express.Router();
//import student schema
const studentsModel = require("../models/studentModel");


router.post('/createData',function(req,res){
    console.log(req.body);
    
    //pass the data to studentModel(schema)
    let student = new studentsModel(req.body);
    student.save(function(err,result){
        if (err){
            console.log("student data is not saved");
        }
        else{
            console.log(result);
            res.send({result:"success"});
        }
    });
    
});

router.get("/getStudentDetails",function(req,res){
    studentsModel.find({studentFirstName:req.query.name}, { _id: 0 ,__v: 0 }, function(err,data){
        if(err){
            console.log("error ocurred",err);
        } else{
            if(data.length){
                console.log("data from students collection",data);
                res.send(data[0]);
            }
            else{
                res.send(`no data for ${req.query.name}`);
            }
        }
    });
});


module.exports = router;