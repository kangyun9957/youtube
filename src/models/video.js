import mongoose from "mongoose";

const videoSchema =new mongoose.Schema({
    title: {type:String ,required:true,trim:true,maxLength:80},
    description : {type:String ,required:true,trim:true,minLength:20},
    createdAt: {type: Date, required: true,default:Date.now,trim:true},
    hashtags: [{type:String,trim:true}],
    meta: {
        views: {type:Number,required:true,default:0},
        rating : {type:Number,required:true,default:0},
    },
})

const video = new mongoose.model("video",videoSchema)

export default video;