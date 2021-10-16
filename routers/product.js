import express from 'express';
const router=express.Router();

//list product
router.get('/product', (req, res)=>{
    res.json({message:"seccessfull"})
    // console.log('successfully')
});

module.exports=router;
