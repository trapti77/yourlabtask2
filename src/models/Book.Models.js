import { Schema,model } from "mongoose"

const bookSchema = new Schema(
{
 Title:{
    type:String,
    requrired:true,
 },
 Author:{
    type:String,
    required:true,
 },
 Pages:{
    type:Number,
    required:true,
 },
 PublishedDate:{
    type:String,
    required:true,
 }
}
)

const Book = model('Book',bookSchema)
export default Book;