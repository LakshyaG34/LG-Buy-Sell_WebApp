import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        // unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        // unique: true
    }
},{Timestamp:true});

export default mongoose.model.user || mongoose.model("User", userSchema);