const Book=require('../models/Book');

const getAllBooks=async(req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }
    catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:'No products found'})
    }
    return res.status(200).json({books})
}

const getById=async (req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:'no book found'})
    }
    return res.status(200).json({book})
}

const addBook=async(req,res,next)=>{
    const {name,author,description,image,learn_more}=req.body;

    let book;
    try{
        book=new Book({
            name,
            author,
            description,
            image,
        });
        await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:'unable to add'})
    }   

    return res.status(201).json({book});
}

const updateBook=async(req,res,next)=>{
    const {name,author,description,image,learn_more}=req.body;
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            image,
            learn_more,
        });
        book=await book.save(); 
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:'unable to update by thss id'})
    }   
    return res.status(200).json({book});
}

const deleteBook=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{ 
        book=await Book.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:'unable to delete by this id'})
    }
    return res.status(200).json({message:'book successfully deleted'});
}

exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;