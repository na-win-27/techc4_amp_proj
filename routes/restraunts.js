const express=require('express');
const router=express.Router();
const restrauntsController=require('../controllers/restrauntsController')

router.post('/add',async(req,res)=>{ 
    console.log("hi")
    const response = await restrauntsController.addRestraunt(req.body);    
    res.send(response);
});


router.get('/get',async(req,res)=>{ 
    const response = await restrauntsController.getRestraunts();
    res.send(response);
})

router.get('/:id',async(req,res)=>{
    const response = await restrauntsController.getRestraunt(req.params.id);
    res.send(response);
})


router.delete('/:id',async(req,res)=>{
    const response = await restrauntsController.deleteRestraunt(req.params.id);
    res.send(response);
})



module.exports =router;