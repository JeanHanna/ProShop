import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name:{
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },  
  comment:{
    type: String,
    required: true,
  },
},{
  timestamps:true,
});

const productSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    requires: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requires: true,
  },
  discription: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    requires: true,
    default: 0,
  },
  numReviews:{
    type: Number,
    required:true,
    default:0,
  },
  price:{
    type:Number,
    required:true,
    default:0,
  },
  countInStock:{
    type:Number,
    required:true,
    default:0,
  },
},{timestamps:true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;