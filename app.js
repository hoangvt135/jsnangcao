import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routers/product';
const app=express();
app.use('/api',productRoutes)
dotenv.config();

const port=process.env.PORT || 8000;
app.listen(3000, ()=>{
    console.log('server is running on port ', port)
})