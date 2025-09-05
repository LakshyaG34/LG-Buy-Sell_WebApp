import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    image:{
        data:Buffer,
        contentType: String
    },
    price:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
},{timestamps: true});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export default Item;