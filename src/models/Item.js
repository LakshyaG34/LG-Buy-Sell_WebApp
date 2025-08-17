import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    image:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    description:{
        type:String,
        // required: true
    },
},{timestamps: true});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export default Item;