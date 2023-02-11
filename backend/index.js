const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const router=require('./routers/book-router')

const app=express();

app.use(express.json());

app.use(cors())

app.use('/books',router);

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.zitd4di.mongodb.net/eLibrary?retryWrites=true&w=majority')
        .then(()=>console.log('connected to database'))
        .then(()=>app.listen(5000))
        .catch((err)=>console.log(err));

        