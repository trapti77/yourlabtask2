
import Book from "../models/Book.Models.js";  
export const bookRegister = (async(req,res,next)=>{
    const {Title,Author, Pages , PublishedDate} = req.body;

if(!Title|| !Author|| !Pages ||!PublishedDate){
    throw res.json({ "message": "all fields are required" });
}
const book = await Book.create({
    Title,Author, Pages , PublishedDate
})
if(!book){
    throw res.json({ "message": "book not created" });
}


return res.status(200).json(
    {
        "message":"book successfully created",book
    }
)

}) 


export const getAllBooks = (async (req,res,next)=>{
    const books = await Book.find({})

    res.status(200).json(
     {
        "message":"all books are here", books
    }
    )
})