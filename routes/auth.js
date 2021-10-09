const express=require('express');
const router=express.Router();
const authController=require('../controllers/authController')


router.post('/signup',async(req,res)=>{ 
    const response = await authController.signup(req.body);    
    res.send(response);
});

router.post('/signin',async(req,res)=>{ 
    const response = await authController.signin(req.body);    
    res.send(response);
});

module.exports =router;