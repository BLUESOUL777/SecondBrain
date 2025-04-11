import mongoose , {model , Schema} from "mongoose";
import { MONGO_URL } from "./config";
if (!MONGO_URL) {
    throw new Error("Missing required environment variables in .env file");
  }
  
mongoose.connect(MONGO_URL)

const UserSchema = new Schema({
    username: {type: String, required: true , unique:true},
    password: {type:String , required: true},
})

export const UserModel = model("User" , UserSchema);

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags : [{type:mongoose.Types.ObjectId , ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId , ref: 'User', required: true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId , ref: 'User' , required: true}
})


export const LinkModel = model("Link" , LinkSchema);
export const ContentModel = model("Content" , ContentSchema); 