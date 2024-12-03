import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    des:{type:String, required:true},
    rating:{type:String, required:true}
}, {timeStamp:true, versionKey:false})
const ReviewModel = mongoose.model('reviews', DataSchema)
export default ReviewModel